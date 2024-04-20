import React from 'react';

class DownloadButton extends React.Component {
  handleDownload = () => {
    const pdfFile = '/Resume/RajatGarg-Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfFile;
    link.download = pdfFile.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  render() {
    return (
      <button onClick={this.handleDownload} className='p-4 bg-black text-neon-hex text-opacity-80 font-bold rounded-xl m-4'>
        CLICK TO DOWNLOAD RESUME
      </button>
    );
  }
}

export default DownloadButton;
