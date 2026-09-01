# 이미 빌드된 한국어 프론트엔드(dist)를 공식 GlitchTip 백엔드에 포함합니다.
FROM glitchtip/glitchtip:6

# 공식 이미지의 기본 실행 사용자에 따라 static 파일 수집 권한이 없을 수 있습니다.
USER root
COPY dist/glitchtip-frontend/browser /code/dist

RUN SECRET_KEY=build-only-secret ./manage.py collectstatic --noinput
