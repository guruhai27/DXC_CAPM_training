sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'guru/po/purchaseorderapp/test/integration/FirstJourney',
		'guru/po/purchaseorderapp/test/integration/pages/POsList',
		'guru/po/purchaseorderapp/test/integration/pages/POsObjectPage',
		'guru/po/purchaseorderapp/test/integration/pages/POItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, POsList, POsObjectPage, POItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('guru/po/purchaseorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThePOsList: POsList,
					onThePOsObjectPage: POsObjectPage,
					onThePOItemsObjectPage: POItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);