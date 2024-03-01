import { useContext } from "react";
import { TvShowContext } from "../pages/TvApp";
import { Grid, Input, Link } from "@mui/joy";
import logo from "../assets/logo.svg";
import { Link as RouterLink } from "react-router-dom";

export default function Header() {
  let arr = ["Popular", "Kids", "Reality", "Crime"];

  const { getTvShows, search, setSearch, searchTvShow } = useContext(TvShowContext);

  return (
    <Grid className="header" container spacing={2} alignItems="center" sx={{ flexGrow: 1 }}>
      <Grid item xs={3} sm={3} md={2} lg={2} xl={2}>
        <RouterLink to="/">
          <img src={logo} alt="TV Show App" />
        </RouterLink>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
        <nav className="navigation">
          {arr.map((value, position) => (
            <Link
              key={position}
              name={value}
              onClick={(e) => getTvShows(e.target.name)}
              style={{
                margin: "10px",
                padding: "5px 20px", 
                borderRadius: "5px",
                fontSize: "15px", 
                backgroundColor: "#4caf50",
                color: "#fff",
                fontWeight: "lighter",
                '&:hover': {
                  backgroundColor: "#66bb6a",
                }
              }}
            >
              {value}
            </Link>
          ))}
        </nav>
      </Grid>
      <Grid item xs={3} sm={3} md={4} lg={4} xl={4} container alignItems="center" justifyContent="flex-end">
        <Grid item xs={5} sm={5} md={5} lg={6} xl={6}>
          <Input
            color="light"
            size="sm"
            variant="soft"
            placeholder="Search a TV show..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={6} sm={7} md={7} lg={6} xl={6} justifyContent="flex-start">
          <button onClick={searchTvShow}>Search Tv Show</button>
        </Grid>
      </Grid>
    </Grid>
  );
}
