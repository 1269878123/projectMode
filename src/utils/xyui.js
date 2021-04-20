//  工程中的 ui 库封装
import store from '@/store'
import { message, Modal } from 'ant-design-vue'

export function Dialog() {}
export function Notify() {}
export function loading() {
  store.commit('setLoading', true)
}
export function clearTip() {
  store.commit('setLoading', false)
}
export let Toast = {
  // str:传入的内容，1：消息框展示的时间比如2就是两秒之后消失以此类推
  // 提示
  fail(str) {
    message.info(str, 1)
  },
  // 错误
  error(str) {
    message.error(str, 1)
  },
  // 警告
  warn(str) {
    message.open({
      content: str,
      duration: 1,
      icon: h => {
        return h('a-icon', {
          props: {
            type: 'warning',
            theme: 'filled'
          },
          style: {
            color: '#ED6A0C'
          }
        })
      }
    })
    // message.warning(str, 10000)
  },
  // 成功
  success(str) {
    message.success(str, 1)
  },
  modal({ title, contents, classname, oktext }) {
    return new Promise(function(resole, reject) {
      Modal.confirm({
        title: title,
        content: contents,
        icon: 'exclamation-circle',
        okText: oktext || '确定',
        cancelText: '取消',
        okType: 'primary',
        class: classname || 'popupbox',
        mask: true,
        maskClosable: false,
        keyboard: false,
        centered: true,
        onCancel: () => {
          reject()
        },
        onOk: () => {
          resole()
        }
      })
    })
  },
  modals({ title, contents }) {
    Modal.success({
      title: title,
      content: contents,
      okText: '确定'
    })
  }
}
export default Toast
