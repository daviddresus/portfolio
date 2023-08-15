import { useState } from 'react';
import styles from '../../Components/DropDown/Dropdown.module.css';

/* <object data='Files/IMS_Projekt_Survival_shooter_Game.pdf' type='application/pdf' title="The Last Chance" className='abstract_viewer'>
            <div className='pdf_error_msg'>
              <p>Ihr Webbrowser kann diese PDF-Datei aktuell nicht anzeigen. Stattdessen können Sie eine Kopie davon herunterladen mit dem unten stehenden Link:</p>
            </div>

            <div className='pdf_download_link'>
              <a href="Files/IMS_Projekt_Survival_shooter_Game.pdf" download="IMS_Projekt_Survival_shooter_Game">Clicken Sie Hier um Ihren download zu starten</a>
            </div>
          </object> */

export default function Dropdown({ content, title }) {
    const [canRun, setCanRun] = useState(true)
    const [open, setOpen] = useState(false)
    const [svgStyle, setStyle] = useState({rotate: '-180deg'})

    const handleToggle = () => {
        if (!canRun) return
        setCanRun(false)
        window.setTimeout(toggleRun, 1000)
        
        setOpen(!open)
        if (open) return setStyle({rotate: '-180deg'})
        return setStyle({})
    }

    const toggleRun = () => {
        setCanRun(true)
    }

    return (
        <div>
            <div className={`${styles.dropdown}`} onClick={handleToggle}>
                <h2>{title}</h2>
            </div>
            <div className={`${styles.content} ${open ? styles.contentOpen : styles.contentClosed}`}>
                {content}
            </div>
        </div>
    )
}