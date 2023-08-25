import { IpcMainInvokeEvent, ipcMain } from 'electron'

export class DataPool {
  private token: string

  constructor() {
    this.token = ''
    this.sendUserInfoData()
    this.getUserInfoData()
  }

  private sendUserInfoData() {
    ipcMain.handle('send:user:info:data', async (_event: IpcMainInvokeEvent, data: string) => {
      this.token = data
    })
  }

  private getUserInfoData() {
    ipcMain.handle('get:user:info:data', async () => {
      return this.token
    })
  }
}
