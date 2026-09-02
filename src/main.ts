import {
  ErrorHandler,
  inject,
  provideZonelessChangeDetection,
  Provider,
} from "@angular/core";
import { loadTranslations } from "@angular/localize";

import { AppComponent } from "./app/app.component";
import { provideMicroSentry } from "@micro-sentry/angular";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from "@angular/material/snack-bar";
import { MAT_CARD_CONFIG } from "@angular/material/card";
import { routes, TemplatePageTitleStrategy } from "./app/app.routes";
import { bootstrapApplication } from "@angular/platform-browser";
import { LessAnnoyingErrorStateMatcher } from "./app/shared/less-annoying-error-state-matcher";
import { ErrorStateMatcher } from "@angular/material/core";
import { CustomMicroSentryErrorHandler } from "./app/custom-microsentry-error-handler";
import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
  provideHttpClient,
  withInterceptors,
  withXhr,
} from "@angular/common/http";
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
} from "@angular/router";
import { CustomPreloadingStrategy } from "./app/preloadingStrategy";
import { APP_BASE_HREF } from "@angular/common";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import koTranslations from "./assets/i18n/messages.ko.json";

let snackBarDuration = 4000;
if (window.Cypress) {
  // Speed up cypress tests
  snackBarDuration = 100;
}
const serverErrorsRegex = new RegExp(`403 Forbidden|404 OK`, "mi");

// Korean build: always load the Korean runtime translations regardless of
// the browser's preferred language.
const locale = "ko";
window.document.documentElement.lang = locale;

export function baseHrefInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) {
  const baseHref = inject(APP_BASE_HREF);
  const apiReq = req.clone({ url: `${baseHref.replace(/\/$/, "")}${req.url}` });
  return next(apiReq);
}

const extraInterceptors: HttpInterceptorFn[] = [];
const extraProviders: Provider[] = [];

const baseElement = document.querySelector("base");
if (baseElement) {
  const baseHref = baseElement.href;
  // Only add base href support when it's not "/"
  if (baseHref !== "/") {
    extraProviders.push({ provide: APP_BASE_HREF, useValue: baseHref });
    extraInterceptors.push(baseHrefInterceptor);
  }
}

const bootstrap = () =>
  bootstrapApplication(AppComponent, {
    providers: [
      ...extraProviders,
      provideZonelessChangeDetection(),
      provideAnimationsAsync(), // ng-charts uses this, should be removed
      provideRouter(
        routes,
        withComponentInputBinding(),
        withPreloading(CustomPreloadingStrategy),
        withInMemoryScrolling({
          scrollPositionRestoration: "enabled",
        }),
        withRouterConfig({
          onSameUrlNavigation: "reload",
          paramsInheritanceStrategy: "always",
        }),
      ),
      provideHttpClient(withXhr(), withInterceptors([...extraInterceptors])),
      provideMicroSentry({
        ignoreErrors: [serverErrorsRegex],
      }),
      {
        provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
        useValue: { duration: snackBarDuration },
      },
      {
        provide: MAT_CARD_CONFIG,
        useValue: { appearance: "outlined" },
      },
      { provide: ErrorHandler, useClass: CustomMicroSentryErrorHandler },
      { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
      {
        provide: ErrorStateMatcher,
        useClass: LessAnnoyingErrorStateMatcher,
      },
    ],
  }).catch((err) => console.error(err));

// Bundle Korean translations directly so deployment paths and static-file
// caching cannot prevent the UI from being translated.
loadTranslations(koTranslations);
bootstrap();
