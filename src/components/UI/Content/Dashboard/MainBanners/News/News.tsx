import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { styles } from "../../../../../../styles/styles";
import { api } from "../../../../../Api/Api";
import { ExternalLinkIconBlue } from "../../../../../Assets/ExternalLinkIconBlue/ExternalLinkIconBlue";
import { NewsIcon } from "../../../../../Assets/NewsIcon/NewsIcon";
import { NewsItem } from "../../../../../interfaces/interfaces";
import CardLabel from "../../Card/CardLabel/CardLabel";
import BluePaperLink from "../../DashboardLinks/BluePaperLink";
import NewsCard from "./NewsCard";

const News = () => {
  const [news, setNews] = useState<Array<NewsItem>>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    if (news.length === 0) {
        const data = await api.getNews();
        setNews(data.articles.splice(0, 8));
    }
  };

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={styles.newsLabelWrapper}
      >
        <CardLabel label="Latest news" icon={<NewsIcon />} />
        <BluePaperLink text="Visit our blog" icon={<ExternalLinkIconBlue />} />
      </Stack>
      {news.length > 0 && (
        <Box sx={styles.newsBoxContent}>
          {news.map((item) => (
            <NewsCard key={item.description} item={item} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default News;
