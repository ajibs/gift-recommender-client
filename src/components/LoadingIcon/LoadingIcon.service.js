export default class LoadingIconService {
  static showIcon () {
    const loadingIcon = document.getElementById('chill-out');
    if (loadingIcon && loadingIcon.style && loadingIcon.style.display) {
      loadingIcon.style.display = 'block';
    }
  }

  static hideIcon () {
    const loadingIcon = document.getElementById('chill-out');
    if (loadingIcon && loadingIcon.style && loadingIcon.style.display) {
      loadingIcon.style.display = 'none';
    }
  }
}
