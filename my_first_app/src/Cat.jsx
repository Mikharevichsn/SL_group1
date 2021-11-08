import React, { useState } from 'react';

const Cat = () => {
  const [catUrl, setCatUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getCat = async () => {
    setIsLoading(true);
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    console.log(data);
    setCatUrl(data[0].url);
    setIsLoading(false);
  };

  return (
    <div>
      <div>
        <button onClick={getCat}>Обновить</button>
      </div>
      {catUrl && <img src={catUrl} width='400' />}
      {!catUrl && !isLoading && <p>Пока картинка не загружена</p>}
      {isLoading && <p>Идет загрузка</p>}
    </div>
  );
};

export default Cat;
