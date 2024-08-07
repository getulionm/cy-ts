describe('Daily word test', () => {
  it('2024-08-07', () => {
    const today = new Date().toISOString().split('T')[0];

      cy.setCookie(
        'fides_consent',
        '%7B%22consent%22%3A%7B%7D%2C%22identity%22%3A%7B%22fides_user_device_id%22%3A%22560ec2cf-6387-47df-beaf-6a8f505290e4%22%7D%2C%22fides_meta%22%3A%7B%22version%22%3A%220.9.0%22%2C%22createdAt%22%3A%222024-08-07T14%3A33%3A10.256Z%22%2C%22updatedAt%22%3A%222024-08-07T14%3A34%3A12.076Z%22%2C%22consentMethod%22%3A%22accept%22%7D%2C%22tcf_consent%22%3A%7B%22system_consent_preferences%22%3A%7B%7D%2C%22system_legitimate_interests_preferences%22%3A%7B%7D%7D%2C%22fides_string%22%3A%22CQC-zoAQC-zoAGXABBENBAFsAPLAAELAAAAAKIoV_A7FIEFC0Hp2YLsEcAwHQFBAYsABAgbAEMAFiBKQIAQGgkAwBASoNCACCAAACBRBIAEkEAAAAFCgYIABCACIIAAMAABAAAAEAAAQAQAIAAAIAAAgEACQBgIUEEAgmBghAJAAUVAAhAEAAAARACAgAIABAgABABEARAIAAQAAAAAAAAgAAAAAAAMAABAIEAABQAAAIIIAABAAAAAAAAAAAAIKAQTAAEAALgAcAB4AFwAOAAgABkADQAHgAPwAiABHACYAFMAKoAXQAxABoAD8AIQARwAnABRgDAAGGAOcAdwA9gB-gEIAIiARYAjgBJQCUgE0AJ-AVAAxQBrwDiAHUAO2AfYA_4CJwEyAKPAVKAruBbAFsgLkAXaAvMBfQC_wGCAMWAZCAyQBkwDKgGWAMuAaaA3UBxYDjwHPgPtAfsA_sCN4EigJggUAAAAA%2C1~61.70.83.89.122.143.144.196.202.230.286.311.320.322.327.413.415.445.491.494.523.540.576.591.802.839.981.1031.1046.1097.1166.1188.1276.1307.1364.1415.1558.1577.1584.1721.1725.1827.1843.1845.1917.1942.1944.1962.2008.2027.2039.2056.2068.2072.2107.2109.2130.2135.2166.2177.2219.2279.2309.2322.2325.2328.2331.2343.2359.2376.2387.2416.2488.2567.2568.2571.2572.2577.2596.2604.2605.2608.2657.2661.2677.2695.2813.2821.2862.2869.2882.2900.2908.2914.2918.2929.2941.2963.2987.3002.3005.3008.3024.3048.3077.3089.3106.3119.3126.3173.3188.3210.3219.3227.3237.3250.3253.3257.3281.3299.3300.4131.7235.14237%22%2C%22tcf_version_hash%22%3A%22ee120afd4ed8%22%7D',
        {
          domain: '.nytimes.com'
        });
      cy.visit('/');
      cy.get('[data-testid="Play"]').click() // play button
      cy.get('[class^="Modal-module_closeIcon"]').click() // close icon "how to play"
      cy.get('[class^="Board-module_board"][style]').should('be.visible') // board

      cy.request('get', `https://www.nytimes.com/svc/wordle/v2/${today}.json`).then(data => {
        const word = data.body.solution
        return {
          word,
          keys: Array.from(new Set(word)).join('')
        }
      }).as('dailyWord')

      cy.get('@dailyWord').then(daily => {
        cy.wait(500)
        for (let i = 0; i < daily.word.length; i++) {
          cy.get('body').type(daily.word[i]);
        }
        cy.wait(500)
        cy.get('body').type('{enter}');
        
        cy.get('[id^=ToastContainer]').should('have.text', 'Genius')
        cy.get('[data-testid="tile"][data-state=correct]').should('have.length', daily.word.length) // tiles
        cy.get('[data-key][data-state=correct]').should('have.length', daily.keys.length) // keys
      });
    })
  });
