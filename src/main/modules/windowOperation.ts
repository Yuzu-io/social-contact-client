import { ElectronWindowType } from '@main/window-type'
import CommonWindow from '@main/window/common'
import WindowFactory from '../window/windowFactory'
import { app, ipcMain } from 'electron'

export class WindowOperation {
  private win: CommonWindow
  constructor(win: CommonWindow) {
    this.win = win
    this.switch()
    this.quitWindow()
  }

  private switch() {
    ipcMain.on('switch:window', (_, winType: ElectronWindowType) => {
      this.win.close()
      this.win = WindowFactory.createWindow(winType)
    })
  }

  private quitWindow() {
    ipcMain.on('quit:application', () => {
      app.quit()
    })
  }
}
