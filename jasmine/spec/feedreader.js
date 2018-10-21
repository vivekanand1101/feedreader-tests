/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URL defined', function() {
            allFeeds.forEach(function(feedItem) {
                expect(feedItem.url).toBeDefined();
                expect(feedItem.url).not.toBe('');
            })
        })


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('has name defined', function() {
            allFeeds.forEach(function(feedItem) {
                expect(feedItem.name).toBeDefined();
                expect(feedItem.name).not.toBe('');
            })
        })
    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

    describe("The menu", function() {
        it('is hidden by default', function() {
            var menu = $('.menu-hidden');
            expect(menu.length).toBeGreaterThan(0);
        })

        it("visibility toggled by clicking", function() {
            var menuIcon = $('.menu-icon-link');
            var menu = $('.menu-hidden');
            expect(menu.length).toBeGreaterThan(0);
            menuIcon.trigger('click')
            var menu = $('.menu-hidden');
            expect(menu.length).toBe(0);
            menuIcon.trigger('click')
            var menu = $('.menu-hidden');
            expect(menu.length).not.toBe(0);
        })
    })
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    describe("Initial Entries", function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('there is atleast one single entry', function() {
            var container = $('.entry');
            expect(container.length).toBeGreaterThan(0);
        })
    })

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    describe("New Feed Selection", function() {
        var udacityFeedHTML = '';
        var csstricksFeedHTML = '';

        beforeEach(function(done) {
            loadFeed(0, done);
            udacityFeedHTML = $('.entry').html();
            // remove the present feed entries
            var items  = $('.feed');
            items.empty();
            loadFeed(1, done);
            csstricksFeedHTML = $('.entry').html();
        });

        it('new feed gets loaded', function() {
            expect(udacityFeedHTML).not.toEqual(csstricksFeedHTML);
        })
    })
}());
