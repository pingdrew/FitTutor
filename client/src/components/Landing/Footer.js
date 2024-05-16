import React from "react";

function Footer() {
  return (
    <div style={{ backgroundColor: '#292a31', padding: '1rem' }}>
      <div style={{ marginTop: '5rem' }}>
        <p style={{ color: 'white', textAlign: 'center' }}>
          &copy; FitTutor {new Date().getFullYear()}.
        </p>
        <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=2spQZ4SzDL2KSe6FKfKihWKCIurWsaNGIGystdpyYiL9yCNEdlfZF0RUWe6C"></script></span>
      </div>
    </div>
  );
}

export default Footer;