import axios from 'axios'
import './App.css';
import React, { useState } from 'react';

const requestImg = async (event) => {
  // form tag를 사용하지 않아도 formdata를 만들 수 있습니다.
  let formData = new FormData();
  formData.append('image', event.target.files[0]);
  // 생성한 폼 데이터에 파일 객체를 할당하고, 서버에 요청을 보냅니다.
  try {
    const imageRes = await axios.post('http://localhost:3000/image', formData);
  } catch (error) {
    console.log(error);
    alert('server error');
  }
}

function App() {
  
  const selectList = ["shop", "board"];
  const [selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div style={{width : '100%'}}>
          <div style={{textAlign : 'left', marginBottom : '10px', marginLeft : '20px'}}>
            이미지 업로드 기능
          </div>
          <div style={{width : '100%'}}>
            <div style={{float : 'left', fontSize : '15px', marginTop : '11px', marginLeft : '20px'}}>
              디렉토리 선택 : &nbsp;&nbsp;
            </div>
            <div style={{textAlign : 'left'}}>
              <select onChange={handleSelect} value={selected}>
                {selectList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              {/* {selected} */}
            </div>
          </div>
          <div id='imageEdit' style={{textAlign : 'left', marginLeft : '20px', marginBottom : '10px'}}>
            <input type='file' id='image_uploads' name='image' accept='image/*' />
          </div>
          <div style={{textAlign : 'left' ,marginLeft : '20px'}}>
            <button style={{fontSize : '20px', width : '200px'}} onClick={() => { requestImg() }}>저장</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
