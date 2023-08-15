import './Abstract.css';

export default function Abstract() {
    return (
        <div id='abstract'>
            <object data='Files/IMS_Projekt_Survival_shooter_Game.pdf' type='application/pdf' title="The Last Chance" className='abstract_viewer'>
                <div className='pdf_error_msg'>
                    <p>Ihr Webbrowser kann diese PDF-Datei aktuell nicht anzeigen. Stattdessen können Sie eine Kopie davon herunterladen mit dem unten stehenden Link:</p>
                </div>

                <div className='pdf_download_link'>
                    <a href="Files/IMS_Projekt_Survival_shooter_Game.pdf" download="IMS_Projekt_Survival_shooter_Game">Clicken Sie Hier um Ihren download zu starten</a>
                </div>
            </object>
        </div>
    )
}