import { useState } from 'react';
import styles from '../../Components/DropDown/Dropdown.module.css';

export default function Dropdown({ content, title, fileLoc, fileName }) {
    const [canRun, setCanRun] = useState(true)
    const [open, setOpen] = useState(false)
    const [svgStyle, setStyle] = useState({ rotate: '0deg' })

    const handleToggle = () => {
        if (!canRun) return
        setCanRun(false)
        window.setTimeout(toggleRun, 1000)

        setOpen(!open)
        if (open) return setStyle({})
        return setStyle({ rotate: '-180deg' })
    }

    const toggleRun = () => {
        setCanRun(true)
    }

    return (
        <div className={styles.dropdown_box}>
            <div className={`${styles.dropdown}`} onClick={handleToggle}>
                <div className={styles.dropdown_button}>
                    <h2>{title}</h2><img src='Images/dropdown.svg' alt='Dropdown Icon' id={styles.dropdown_icon} style={svgStyle} />
                </div>
<<<<<<< HEAD
                <div className={styles.download_button}>
                    <p>text</p>
=======
                <div className={`${styles.download_button} ${open ? styles.showDownload : styles.hideDownload}`}>
                    <a href={fileLoc} download={fileName}>
                        <img src='Images/download.svg' alt='download' />
                    </a>
>>>>>>> e25dee126aa62cf12fd1c45be35b4d4f8e794373
                </div>
            </div>
            <div className={`${styles.content} ${open ? styles.contentOpen : styles.contentClosed}`}>
                {content}
            </div>
        </div>
    )
}