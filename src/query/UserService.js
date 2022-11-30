import axios from 'axios'

export default class UserServise {
  async getUserNickName() {
    let response = await axios.get('..../app/test.py')
  }
}