const { ipcRenderer } = window.electron

class TransferUserInfoDataHelper {
  sendUserInfoData(data: string) {
    ipcRenderer.invoke('send:user:info:data', data)
  }

  getUserInfoData() {
    return ipcRenderer.invoke('get:user:info:data')
  }
}

export default new TransferUserInfoDataHelper()
