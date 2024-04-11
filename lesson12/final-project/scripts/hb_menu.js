const hamButton = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



let dbPromise;
function openDB() {
  if (!dbPromise) {
    dbPromise = new Promise((resolve, reject) => {
      const req = indexedDB.open('my-db', 1);
      req.onupgradeneeded = () => req.result.createObjectStore('keyval');
      req.onerror = () => reject(req.error);
      req.onsuccess = () => resolve(req.result);
    });
  }
  return dbPromise;
}

// Close the connection to the database when the user leaves.
window.addEventListener('pagehide', () => {
  if (dbPromise) {
    dbPromise.then(db => db.close());
    dbPromise = null;
  }
});

// Open the connection when the page is loaded or restored from bfcache.
window.addEventListener('pageshow', () => openDB());