export default function root() {
    if (window.location.href.includes('github.io')) {
        return '/simplr-website-v2/';
    } else {
        return '/';
    }
}
