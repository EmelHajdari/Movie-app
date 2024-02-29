import { Link } from "react-router-dom";
import { Button } from "@mui/joy";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", height: "100vh" }}>
      <h1 style={{ marginBottom: "2rem", fontWeight: "lighter" }}>Movie App</h1>
      <div style={{ alignSelf: "center" }}>
        <Link to="/movie" style={{ textDecoration: "none", margin: "10px" }}>
          <Button 
            color="primary" 
            variant="contained"
            sx={{ 
              fontSize: "1.5rem",
              backgroundColor: "#1976d2",
              color: "#fff",
              fontWeight: "lighter", // Stilizo tekstin në buton me fontWeight: lighter
              '&:hover': {
                backgroundColor: "#115293",
              }
            }}
          >
            Movie
          </Button>
        </Link>
        <Link to="/tv" style={{ textDecoration: "none", margin: "10px" }}>
          <Button 
            color="success" 
            variant="contained"
            sx={{ 
              fontSize: "1.5rem",
              backgroundColor: "#4caf50",
              color: "#fff",
              fontWeight: "lighter", // Stilizo tekstin në buton me fontWeight: lighter
              '&:hover': {
                backgroundColor: "#388e3c",
              }
            }}
          >
            TV Show
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
