import { Link } from 'react-router-dom'
import { useRef, useState } from 'react'

function GetStarted() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const cameraInputRef = useRef<HTMLInputElement | null>(null)

  const onPickFile = () => fileInputRef.current?.click()
  const onPickCamera = () => cameraInputRef.current?.click()

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return
    const file = files[0]
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
  }
  return (
    <div className="upload-layout full-bleed">
      <aside className="upload-sidebar">
        <div className="logo">로고</div>
        <div className="icon-row icon-row--sidebar">
          <button aria-label="사진 촬영" className="icon-circle" type="button">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7a2 2 0 0 1 2-2h2.2a1 1 0 0 0 .8-.4l.8-1.2A2 2 0 0 1 11.2 2h1.6a2 2 0 0 1 1.6.8l.8 1.2a1 1 0 0 0 .8.4H18a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" stroke="#111827" strokeWidth="1.6"/>
              <circle cx="12" cy="13" r="4" stroke="#111827" strokeWidth="1.6"/>
            </svg>
          </button>
          <button aria-label="파일" className="icon-circle" type="button">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 3h6l4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" stroke="#111827" strokeWidth="1.6"/>
              <path d="M13 3v5h5" stroke="#111827" strokeWidth="1.6"/>
            </svg>
          </button>
          <button aria-label="알림" className="icon-circle" type="button">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 10a6 6 0 1 0-12 0c0 4-2 5-2 5h16s-2-1-2-5Z" stroke="#111827" strokeWidth="1.6"/>
              <path d="M10 19a2 2 0 0 0 4 0" stroke="#111827" strokeWidth="1.6"/>
            </svg>
          </button>
        </div>
        <nav className="nav">
          <Link className="nav__item" to="/">
            <span className="nav__icon">🏠</span>
            홈
          </Link>
          <a className="nav__item nav__item--active" href="#">
            <span className="nav__icon">⤴️</span>
            업로드
          </a>
          <a className="nav__item" href="#">
            <span className="nav__icon">🗂️</span>
            DB 조회
          </a>
          <a className="nav__item" href="#">
            <span className="nav__icon">🔗</span>
            프롬프트
          </a>
        </nav>
      </aside>

      <main className="upload-content">
        <h2 className="page-title">자료 업로드</h2>

        <div className="upload-actions">
          <button className="btn btn--secondary" onClick={onPickCamera}>사진 촬영</button>
          <button className="btn btn--primary" onClick={onPickFile}>파일 업로드</button>
          <input ref={cameraInputRef} type="file" accept="image/*" capture="environment" style={{ display: 'none' }} onChange={(e) => handleFiles(e.target.files)} />
          <input ref={fileInputRef} type="file" accept="image/*,application/pdf" style={{ display: 'none' }} onChange={(e) => handleFiles(e.target.files)} />
        </div>

        <div className="preview-frame">
          <div className="preview-toolbar">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
          <div className="preview-canvas">
            {previewUrl ? (
              <img src={previewUrl} alt="preview" className="preview-image" />
            ) : (
              <div className="empty-canvas" />
            )}
          </div>
          <div className="preview-footer">
            <button className="btn btn--secondary">
              ✈️ 공유하기
            </button>
            <div className="loading">
              <span className="spinner" /> Loading
            </div>
          </div>
        </div>

        <div className="footer-actions">
          <button className="btn btn--primary btn--wide">DB 저장하기</button>
        </div>
      </main>
    </div>
  )
}

export default GetStarted


