import { ipcMain } from 'electron'

import { UserInfo } from '@/types/index'

export class UserInfoDataPool {
  private username: string
  private sex: string
  private token: string

  constructor() {
    this.username = ''
    this.sex = ''
    this.token = ''
    this.sendUserInfoData()
    this.getUserInfoData()
  }

  private sendUserInfoData() {
    ipcMain.handle('send:user:info:data', async (_, data: UserInfo) => {
      this.username = data.username
      this.sex = data.sex
      this.token = data.token
    })
  }

  private getUserInfoData() {
    ipcMain.handle('get:user:info:data', async () => {
      return this
    })
  }
}
