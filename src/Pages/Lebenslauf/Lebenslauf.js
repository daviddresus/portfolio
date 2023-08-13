import './Lebenslauf.css'
import Title from '../../Components/Title/Title.js';

export default function Lebenslauf() {
  return (
    <div>
      <Title text="Lebenslauf" />
      <object data='Files/Lebenslauf.pdf' type='application/pdf' title="Lebenslauf">
        <div className='pdf_error_msg'>
          <p>Ihr Webbrowser kann diese PDF-Datei aktuell nicht anzeigen. Stattdessen können Sie eine Kopie davon herunterladen mit dem unten stehenden Link:</p>
        </div>

        <div className='pdf_download_link'>
          <a href="Files/Lebenslauf.pdf" download="Lebenslauf">Clicken Sie Hier um Ihren download zu starten</a>
        </div>
      </object>
    </div>
  )
}