



import React from 'react'

export default function Header() {
  return (
    <>
      <div className='header' style={{top: '0px', position: 'fixed', zIndex: '10', padding:'20px', marginBottom: '20px', backgroundColor: 'purple',opacity:'0.8', width: '100%', color: 'white', textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: '1px'}}>
        <div className='top-strip'>
            <div className='container'>
                <p className='mb-0 mt-0 text-center'>la CODVID19 est bien reel</p>
            </div>
        </div>
      </div>
    </>
  )
}
