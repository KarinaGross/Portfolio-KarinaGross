<template>
    <div>
        <main>
            <div class="top-box">
                <div class="top-box__content">
                    <p class="top-box__title">Articles & News</p>
                    <p class="top-box__text">Home / Blog</p>
                </div>
            </div>
            <div class="post-box center">
                <div class="post-box__heading">Latest Post</div>
                <div class="post-box__main">
                    <img src="@/assets/img/postPhoto.png" alt="photo" class="post-box__photo">
                    <div class="post-box__content">
                        <div class="post-box__title">Low Cost Latest Invented Interior Designing Ideas</div>
                        <div class="post-box__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                            dignissim
                            maximus.posuere in.Contrary to popular belief.

                            Lorem Ipsum is not simply random text. It has roots in a piece of classica.</div>
                        <div class="post-box__date">
                            <div class="post-box__date_number">26 December,2022 </div>
                            <svg class="post-box__date_arrow" xmlns="http://www.w3.org/2000/svg" width="52" height="53"
                                viewBox="0 0 52 53" fill="none">
                                <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
                                <path d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141" stroke="#292F36" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div class="articles-news center">
                <div class="articles-news__title">Articles & News</div>
                <div class="articles" id="vue-box">
                    <div v-for="article in articles" :key="article.id" class="article">
                        <img class="article__img" :src="article.img" alt="img">
                        <div class="article__title">{{ article.title }}</div>
                        <div class="article__text">{{ article.text }}</div>
                        <div class="article__data-and-arrow">
                            <div class="article__date">{{ article.date }}</div>
                            <img src="@/assets/img/arrow.svg" alt="arrow" class="article__arrow">
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>


export default {
    name: 'blog-main',
    data() {
        return {
            articles: [
                {
                    img: 'https://i.ibb.co/brgLGGv/articles-And-News1.png',
                    title: 'Kitchan Design',
                    text: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022 '
                },
                {
                    img: 'https://i.ibb.co/5Gp9B4p/articles-And-News2.png',
                    title: 'Living Design',
                    text: 'Low Cost Latest Invented Interior Designing Ideas',
                    date: '22 December,2022 '
                },
                {
                    img: 'https://i.ibb.co/wp6nzNQ/articles-And-News3.png',
                    title: 'Interior Design',
                    text: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022 '
                },
                {
                    img: 'https://i.ibb.co/xDhLtGv/articles-And-News4.png',
                    title: 'Kitchan Design',
                    text: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022 '
                },
                {
                    img: 'https://i.ibb.co/LvZQrw3/articles-And-News5.png',
                    title: 'Living Design',
                    text: 'Low Cost Latest Invented Interior Designing Ideas',
                    date: '22 December,2022 '
                },
                {
                    img: 'https://i.ibb.co/s3hdyNm/articles-And-News6.png',
                    title: 'Interior Design',
                    text: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022 '
                }
            ]
        };
    },
    mounted() {
    },
    methods: {},
    // components: { router }
};
</script>

<style lang="scss" scoped>
.top-box {
    background: url("@/assets/img/Photo.jpg") no-repeat center center;
    height: 356px;
    // width: 1920px;
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.top-box__content {
    display: flex;
    width: 503px;
    padding: 41px 78px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 37px 37px 0px 0px;
    background: #FFF;
}

.top-box__title {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
}

.top-box__text {
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}

.post-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 27px;
    margin-bottom: 150px;
}

.post-box__heading {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
}

.post-box__main {
    display: flex;
    padding: 22px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 65px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
}

.post-box__photo {
    border-radius: 62px;
}

.post-box__content {
    display: flex;
    flex-direction: column;
    width: 489px;
}

.post-box__title {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
    margin-bottom: 22px;
    width: 463px;
}

.post-box__text {
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
    margin-bottom: 41px;
    width: 469px;
}

.post-box__date {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.post-box__date_number {
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.articles-news__title {
    color: #292F36;
    text-align: start;
    font-family: "DM Serif Display", serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 1px;
    margin-bottom: 30px;
}

.articles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 22px;
    margin-bottom: 96px;
}

.article {
    padding: 20px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    box-sizing: border-box;
}

.article__img {
    border-radius: 50px 50px 0 0;
}

.article__title {
    width: 124px;
    height: 41px;
    border-radius: 8px 8px 8px 0px;
    background-color: #FFF;
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 200%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
    margin-top: -60px;
    margin-left: 20px;
    position: absolute;
    padding: 4px 5px 8px 11px;
    box-sizing: border-box;
}

.article__text {
    color: #292F36;
    font-family: "DM Serif Display", serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.5px;
    width: 306px;
}

.article__data-and-arrow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.article__date {
    color: #4D5053;
    font-family: "Jost", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.article__arrow {
    width: 52px;
    height: 52px;
}
</style>