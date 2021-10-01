import io from "socket.io-client"

const ENDPOINT = process.env.REACT_APP_API_SOCKET_URL

const socket = io(ENDPOINT, { transports : ['websocket'] })

export {socket}