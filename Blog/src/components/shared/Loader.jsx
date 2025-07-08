import { ring } from "ldrs";
import { Ring } from "ldrs/react"
import 'ldrs/react/Ring.css';


function Loader() {
  ring.register();
  return (
      <div style={
        {
            width: "100%",
            height: "1000px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px"
        }
      }>
        <Ring size={50} speed={1.5} bgOpacity={0.25} color="grey" />
      </div>
  )
}

export default Loader