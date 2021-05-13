import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Path = styled.div`
  svg {
    display: block;
  }
`

export const Top = ({ top, bottom }) => (
  <Path>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      fill={bottom}
    >
      <rect fill={top} width="1440" height="320"></rect>
      <path d="M0,224L0,64L36.9,64L36.9,160L73.8,160L73.8,320L110.8,320L110.8,224L147.7,224L147.7,160L184.6,160L184.6,128L221.5,128L221.5,192L258.5,192L258.5,288L295.4,288L295.4,0L332.3,0L332.3,288L369.2,288L369.2,160L406.2,160L406.2,128L443.1,128L443.1,128L480,128L480,224L516.9,224L516.9,256L553.8,256L553.8,160L590.8,160L590.8,64L627.7,64L627.7,64L664.6,64L664.6,256L701.5,256L701.5,96L738.5,96L738.5,320L775.4,320L775.4,128L812.3,128L812.3,32L849.2,32L849.2,320L886.2,320L886.2,192L923.1,192L923.1,224L960,224L960,96L996.9,96L996.9,128L1033.8,128L1033.8,96L1070.8,96L1070.8,256L1107.7,256L1107.7,288L1144.6,288L1144.6,256L1181.5,256L1181.5,224L1218.5,224L1218.5,96L1255.4,96L1255.4,288L1292.3,288L1292.3,256L1329.2,256L1329.2,0L1366.2,0L1366.2,128L1403.1,128L1403.1,32L1440,32L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path>
    </svg>
  </Path>
)

Top.propTypes = {
  top: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
}

export const Bottom = ({ top, bottom }) => (
  <Path>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      fill={bottom}
    >
      <rect fill={top} width="1440" height="320"></rect>
      <path d="M0,288L0,224L36.9,224L36.9,288L73.8,288L73.8,256L110.8,256L110.8,160L147.7,160L147.7,32L184.6,32L184.6,32L221.5,32L221.5,128L258.5,128L258.5,224L295.4,224L295.4,64L332.3,64L332.3,288L369.2,288L369.2,160L406.2,160L406.2,288L443.1,288L443.1,288L480,288L480,64L516.9,64L516.9,320L553.8,320L553.8,320L590.8,320L590.8,0L627.7,0L627.7,256L664.6,256L664.6,224L701.5,224L701.5,64L738.5,64L738.5,160L775.4,160L775.4,96L812.3,96L812.3,160L849.2,160L849.2,160L886.2,160L886.2,160L923.1,160L923.1,32L960,32L960,160L996.9,160L996.9,160L1033.8,160L1033.8,160L1070.8,160L1070.8,288L1107.7,288L1107.7,192L1144.6,192L1144.6,224L1181.5,224L1181.5,160L1218.5,160L1218.5,320L1255.4,320L1255.4,0L1292.3,0L1292.3,64L1329.2,64L1329.2,288L1366.2,288L1366.2,224L1403.1,224L1403.1,224L1440,224L1440,320L1403.1,320L1403.1,320L1366.2,320L1366.2,320L1329.2,320L1329.2,320L1292.3,320L1292.3,320L1255.4,320L1255.4,320L1218.5,320L1218.5,320L1181.5,320L1181.5,320L1144.6,320L1144.6,320L1107.7,320L1107.7,320L1070.8,320L1070.8,320L1033.8,320L1033.8,320L996.9,320L996.9,320L960,320L960,320L923.1,320L923.1,320L886.2,320L886.2,320L849.2,320L849.2,320L812.3,320L812.3,320L775.4,320L775.4,320L738.5,320L738.5,320L701.5,320L701.5,320L664.6,320L664.6,320L627.7,320L627.7,320L590.8,320L590.8,320L553.8,320L553.8,320L516.9,320L516.9,320L480,320L480,320L443.1,320L443.1,320L406.2,320L406.2,320L369.2,320L369.2,320L332.3,320L332.3,320L295.4,320L295.4,320L258.5,320L258.5,320L221.5,320L221.5,320L184.6,320L184.6,320L147.7,320L147.7,320L110.8,320L110.8,320L73.8,320L73.8,320L36.9,320L36.9,320L0,320L0,320Z"></path>
    </svg>
  </Path>
)

Bottom.propTypes = {
  top: PropTypes.string.isRequired,
  bottom: PropTypes.string.isRequired,
}