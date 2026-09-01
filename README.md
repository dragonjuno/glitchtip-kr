# GlitchTip 한국어판

GlitchTip 프론트엔드의 한국어 번역판입니다. GlitchTip은 Sentry 호환 오류 추적 기능을 제공하는 오픈 소스 프로젝트입니다.

## 원본 프로젝트

- 공식 웹사이트: <https://glitchtip.com/>
- 원본 프론트엔드: <https://gitlab.com/glitchtip/glitchtip-frontend>
- 원본 백엔드: <https://gitlab.com/glitchtip/glitchtip-backend>
- 이 저장소: <https://github.com/dragonjuno/glitchtip-kr>

이 저장소는 원본 GlitchTip 프론트엔드에 한국어 번역을 추가한 커뮤니티 버전입니다. 원본 프로젝트의 저작권과 상표권은 각 권리자에게 있습니다.

## 라이선스

원본 소스와 이 번역판은 [MIT License](./LICENSE)를 따릅니다. 배포할 때 저작권 고지와 라이선스 전문을 유지해 주세요.

## 한국어 번역 적용 내용

- 전체 번역 항목 341개
- `src/locale/messages.ko.xlf`
- `src/assets/i18n/messages.ko.json`
- 브라우저 언어가 한국어일 때 `ko` 로케일 자동 선택

## Ubuntu Docker 배포

```bash
sudo apt update
sudo apt install -y docker.io docker-compose-plugin git openssl
sudo systemctl enable --now docker
sudo mkdir -p /opt/glitchtip-kr
sudo chown "$USER":"$USER" /opt/glitchtip-kr
git clone https://github.com/dragonjuno/glitchtip-kr.git /opt/glitchtip-kr
cd /opt/glitchtip-kr
cp .env.example .env
nano .env
```

`.env`에서 `POSTGRES_PASSWORD`, `SECRET_KEY`, `GLITCHTIP_DOMAIN`, `DEFAULT_FROM_EMAIL`을 운영 환경에 맞게 변경하세요. `SECRET_KEY`는 `openssl rand -hex 32`로 생성할 수 있습니다.

GitHub Actions가 저장소에 포함된 한국어 프론트엔드 빌드 결과를 Docker 이미지에 포함해 GHCR에 게시합니다. 서버에서는 Docker 이미지만 내려받고 빌드하지 않습니다.

```bash
docker compose pull
docker compose up -d
docker compose logs -f web
```

웹 브라우저에서 `http://서버주소:8000`으로 접속합니다. 운영 환경에서는 nginx 등의 리버스 프록시와 HTTPS를 구성하는 것을 권장합니다.

업데이트할 때는 다음 명령을 사용합니다.

```bash
cd /opt/glitchtip-kr
git pull
docker compose pull
docker compose up -d
```

데이터는 Docker 볼륨 `pg-data`와 `uploads`에 저장됩니다. 운영 전 두 볼륨을 정기적으로 백업하세요.

## 로컬 개발

```bash
npm ci
npm start
```

프로덕션 프론트엔드 빌드는 `npm run build-prod`로 실행합니다.

## 번역 기여

번역 오류나 개선 사항은 [Issue](https://github.com/dragonjuno/glitchtip-kr/issues) 또는 Pull Request로 알려 주세요. 원본 GlitchTip의 변경사항을 반영할 때는 원본 라이선스와 저작권 고지를 유지해야 합니다.
