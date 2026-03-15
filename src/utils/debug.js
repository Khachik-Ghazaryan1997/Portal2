export function setupDebug() {
  if (window.location.hash === '#debug') {
    return import('lil-gui').then(({ GUI }) => {
      const gui = new GUI();
      return gui;
    });
  }
  return Promise.resolve(null);
}
