declare module 'swiper' {
    import { Navigation, Pagination, Autoplay } from 'swiper';
  
    export = Swiper;
    export as namespace Swiper;
  
    const Swiper: {
      // Aqui você pode adicionar outras propriedades e métodos conforme necessário
      Navigation: Navigation;
      Pagination: Pagination;
      Autoplay: Autoplay;
    };
  
    export default Swiper;
  }
  