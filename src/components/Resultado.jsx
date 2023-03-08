import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 24px;
  span {
    font-weight: 700;
  }
`;

const PrecioHigh = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
    color: #3ab72c;
  }
`;

const PrecioLow = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
    color: #b7322c;
  }
`;

const Resultado = ({ resultado }) => {
  //console.log(resultado);
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="imagen cripto"
      />
      <div>
        <Precio>
          El Precio es de: <span>{PRICE}</span>
        </Precio>
        <PrecioHigh>
          El Precio mas alto del dia: <span>{HIGHDAY}</span>
        </PrecioHigh>
        <PrecioLow>
          El Precio mas bajo del dia: <span>{LOWDAY}</span>
        </PrecioLow>
        <Texto>
          Variacion ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Ultima Actualizacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
