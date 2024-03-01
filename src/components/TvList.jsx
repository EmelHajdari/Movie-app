import { useContext } from "react";
import { TvShowContext } from "../pages/TvApp";

import {
  Card,
  Grid,
  CardOverflow,
  AspectRatio,
  CardContent,
  Divider,
  Typography,
} from "@mui/joy";

export default function TvShowList() {
  let imgUrl = "https://image.tmdb.org/t/p/w500";

  const { tvShows } = useContext(TvShowContext);

  return (
    <Grid container spacing={2} sx={{ flexGrow: 1, marginX: 2 }}>
      {tvShows.length === 0 ? (
        <div className="no-data-msg">
          <p>No TV shows found!</p>
        </div>
      ) : (
        tvShows.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id} sx={{ padding: 2, marginTop: 2 }}>
            <Card
              color="warning"
              orientation="vertical"
              size="md"
              variant="soft"
              sx={{ height: '100%' }}
            >
              <CardOverflow>
                <AspectRatio ratio="1">
                  <img
                    src={
                      item.poster_path == null
                        ? defaultTvShowImg
                        : imgUrl + item.poster_path
                    }
                    srcSet={
                      item.poster_path == null
                        ? defaultTvShowImg
                        : imgUrl +
                          item.poster_path +
                          "?auto=format&fit=crop&w=318&dpr=2 2x"
                    }
                    loading="lazy"
                    alt={item.name}
                  />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Typography level="title-md">{item.name}</Typography>
                
                <div className='overview'>
                  {item.overview
                      ? item.overview.length > 150
                          ? item.overview.substring(0, 147) + '...'
                          : item.overview
                    : 'Tv Show overview coming soon...'}
                </div>
               
              </CardContent>
              <CardOverflow
                variant="soft"
                sx={{ bgcolor: "background.level1" }}
              >
                <Divider inset="context" />
                <CardContent orientation="horizontal">
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    Total votes: {item.vote_count}
                  </Typography>
                  <Divider orientation="vertical" />
                  <Typography
                    level="body-xs"
                    fontWeight="md"
                    textColor="text.secondary"
                  >
                    {item.first_air_date}
                  </Typography>
                  <Divider orientation='vertical' />
                  <Typography
                    level='body-xs'
                    fontWeight='md'
                    textColor='text.secondary'
                  >
                    {item.original_language.toUpperCase()}
                  </Typography>
                </CardContent>
              </CardOverflow>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
}