import axios from 'axios'
import useSWR from 'swr'
import apiConfig from '../../../apiConfig'

interface RegisterData {
  username: string
  password: string
  department: string
}

const fetcher = ([url, data]: [string, RegisterData]) =>
  axios
    .post(url, data)
    .then((res) => res.data)
    .catch((err) => console.log(err))

const useRegister = (register: boolean, data: RegisterData) =>
  useSWR(register ? [apiConfig.url.user.register(), data] : null, fetcher)

export default useRegister
