import React from 'react'
import s from './layout_btm.module.css'

export default function Layout_btm() {
  return (
    <div className={s.lay}>
      <p className={s.page_num}><span>01</span>/07</p>
      <div className={s.lang}>
        <p><span>ENG</span>/RUS</p>
      </div>
    </div>
  )
}
