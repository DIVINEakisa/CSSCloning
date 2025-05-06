let lastScrollY = window.scrollY;
  const barCenter = document.querySelector('.bar');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      
      barCenter.style.position = 'fixed';
      barCenter.style.top = '0';
      barCenter.style.left = '-1vw'; 
      barCenter.style.right = '3vw';
      barCenter.style.zIndex = '1000';
    } else {
      
      barCenter.style.position = 'relative';
    }

    lastScrollY = currentScrollY;
  });
  