document.addEventListener("DOMContentLoaded", function () {
  const bookmarks = document.querySelectorAll('.bookmark');
  const bookCover = document.querySelector('.book-cover');
  const book = document.getElementById('book');

  bookmarks.forEach((mark, index) => {
    mark.addEventListener('click', () => {
      if (!bookCover.classList.contains('open')) {
        bookCover.classList.add('open');
        book.classList.add('animate');

        setTimeout(() => {
          window.location.href = `./open/open_mark${index + 1}.htm`;
        }, 800);
      }
    });
  });

  window.addEventListener('pageshow', function (event) {
    if (event.persisted || performance.navigation.type === 2) {
      bookCover.classList.remove('open');
      book.classList.remove('animate');
    }
  });
});
