document.addEventListener('DOMContentLoaded', function() {
    // 현재 날짜로 마지막 업데이트 표시
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      lastUpdatedElement.textContent = now.toLocaleDateString('ko-KR', options);
    }
  });