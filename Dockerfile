# 이미 빌드된 한국어 프론트엔드(dist)를 공식 GlitchTip 백엔드에 포함합니다.
FROM glitchtip/glitchtip:6

# collectstatic 없이 프론트엔드 정적 파일을 Django static 루트에 직접 배치합니다.
COPY dist/glitchtip-frontend/browser/index.html /code/dist/index.html
COPY dist/glitchtip-frontend/browser/favicon.ico /code/static/favicon.ico
COPY dist/glitchtip-frontend/browser/*.js /code/static/
COPY dist/glitchtip-frontend/browser/*.css /code/static/
COPY dist/glitchtip-frontend/browser/assets/ /code/static/assets/
COPY dist/glitchtip-frontend/browser/media/ /code/static/media/
COPY dist/glitchtip-frontend/browser/sdk-docs/ /code/static/sdk-docs/
