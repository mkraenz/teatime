set -e

OPTIONAL_INPUT_FILENAME=$1

BUILD_LIST=$(eas build:list --json --non-interactive --limit=1 --platform=android)
BUILD_URL=$(echo $BUILD_LIST | jq -r '.[0].artifacts.buildUrl')
BUILD_VERSION=$(echo $BUILD_LIST | jq -r '.[0].appVersion')
FALLBACK_FILENAME="dq.v${BUILD_VERSION}.aab"
OUTPUT_FILENAME="${OPTIONAL_INPUT_FILENAME:-$FALLBACK_FILENAME}"

wget "$BUILD_URL" -O $OUTPUT_FILENAME

echo "Successfully downloaded latest android build to $(pwd)/$OUTPUT_FILENAME" 