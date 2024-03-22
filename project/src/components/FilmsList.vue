<template>
  <div class="container content-block">
    <div class="movies">
      <router-link tag="div" class="movie" v-if="filmsList" v-for="item in filmsToDisplay" :to="`/film/${item.id}`"
        :key="item">
        <div class="movie_cover">
          <img class="" v-bind:src="item.poster?.previewUrl || item.poster || item.poster?.url" alt="">
          <div class="movie_title"> "{{ item.name }}"</div>
          <div class="movie_rating">Рейтинг: {{ getRating(item) }}</div>
          <div class="movie_dark">Год выхода: {{ item.year }}</div>
        </div>
      </router-link>
    </div>
  </div>

  <nav class="pagination">
    <ul class="pagination">
      <li class="page-item" :class="{ active: currentPage === index }" v-for="index in totalPages" :key="index">
        <a class="page-link" v-on:click="setCurrentPage(index)">{{ index }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    filmsList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentPage: 1,
      totalPages: null,
      filmsPerPage: 10
    };
  },
  created() {
    this.totalPages = Math.ceil(this.filmsList.length / this.filmsPerPage);
  },
  computed: {
    filteredFilms() {
      return this.filmsList.filter(item => item.poster?.previewUrl || item.poster || item.poster?.url);
    },
    filmsToDisplay() {
      const startIndex = (this.currentPage - 1) * this.filmsPerPage;
      return this.filteredFilms.slice(startIndex, startIndex + this.filmsPerPage);
    }
  },
  methods: {
    setCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
    },
    getRating(film) {
      if (film.rating.kp) {
        return this.transfomRating(film.rating.kp)
      } else {
        return this.transfomRating(film.rating)
      }
    },
    transfomRating(rating) {
      return String(rating).slice(0, 3)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.container {}

.content-block {
  margin-top: 50px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;

  & a {
    & :active {
      background-color: $color-red;
      border-color: $color-red;
    }

    & :focus {
      background-color: $color-red;
      border-color: $color-red;
    }

    cursor: pointer;
  }
}

.active {
  .page-link {
    background-color: $color-red;
    border-color: $color-red;

    &:active {
      background-color: $color-red;
      border-color: $color-red;
    }

    & :focus {
      background-color: $color-red;
      border-color: $color-red;
    }
  }
}

.movies {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.movie {
  width: 200px;
  color: $color-white;
}

.movie_title {
  text-align: center;
}

.movie_cover {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>