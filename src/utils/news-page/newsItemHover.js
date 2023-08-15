export const newsItemHover = () => {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.news-overview_item-link').forEach(trigger => {
            trigger.addEventListener('mouseover', function () {
                this.querySelectorAll('.text-link-hover').forEach(target => target.classList.add('is-hover'));
            });
        });
        document.querySelectorAll('.news-overview_item-link').forEach(trigger => {
            trigger.addEventListener('mouseout', function () {
                this.querySelectorAll('.text-link-hover').forEach(target => target.classList.remove('is-hover'));
            });
        });
    });
}