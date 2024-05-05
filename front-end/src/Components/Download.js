import React from 'react';

class DownloadButton extends React.Component {
  handleDownload = () => {
    const pdfFile = '/RajatGarg-Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = pdfFile.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
      <button onClick={this.handleDownload} className='p-4 m-6 border bg-black text-neon-hex text-opacity-80 font-bold rounded-full w-[80%] md:w-[60%] lg:w-[55%] 2xl:w-[45%] xl:w-[50%]'>
        CLICK TO DOWNLOAD RESUME
      </button>
    );
  }
}

export default DownloadButton;
