import { ElectronWindowType } from '@main/window-type'

const { ipcRenderer } = window.electron

class ElectronWindowHelper {
  open(winType: ElectronWindowType) {
    // ipcRenderer.send("switch-window", winType);
  }

  switch(winType: ElectronWindowType) {
    ipcRenderer.send('switch:window', winType)
  }

  close() {
    ipcRenderer.send('quit:application')
  }
}

export default new ElectronWindowHelper()
