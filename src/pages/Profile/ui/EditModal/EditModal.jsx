import React from 'react'
import styles from "./EditModal.module.css"

function EditModal() {
  return (
    <div className={styles.editContainer}>
        <div className={styles.editContent}>
            <div>
                <h4>Редактирование аккаунта</h4>
                <button>&times;</button>
            </div>
            <form action="">
                <input type="text" placeholder='ФИО'/>
                <input type="tel" placeholder='Телефон'/>
                <input type="password" placeholder='Пароль'/>
                <input type="text" placeholder='Адрес'/>
            </form>
            <button>Сохранить</button>
        </div>
    </div>
  )
}

export default EditModal