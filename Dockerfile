# 이미 빌드된 한국어 프론트엔드(dist)를 공식 GlitchTip 백엔드에 포함합니다.
FROM glitchtip/glitchtip:6

COPY dist/glitchtip-frontend/browser /code/dist
