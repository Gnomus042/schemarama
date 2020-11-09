const shaclShapes = `
@prefix: <http://example.org/> .
@prefix schema: <http://schema.org/> .
@prefix sh: <http://www.w3.org/ns/shacl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .


:ValidSchemaAggregateRating a sh:NodeShape;
\tsh:targetClass schema:AggregateRating;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:itemReviewed;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:ratingCount;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:reviewCount;
\t\tsh:node :ValidSchemaInteger;
\t].



:ValidSchemaBoolean a sh:NodeShape;
    sh:or (
        [sh:nodeKind sh:Literal]
        [sh:datatype xsd:boolean]
    ).


:ValidSchemaCreativeWork a sh:NodeShape;
\tsh:targetClass schema:CreativeWork;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:about;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:accessMode;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:accessModeSufficient;
\t\tsh:node :ValidSchemaItemList;
\t];
\tsh:property [
\t\tsh:path schema:accessibilityAPI;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:accessibilityControl;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:accessibilityFeature;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:accessibilityHazard;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:accessibilitySummary;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:accountablePerson;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:aggregateRating;
\t\tsh:node :ValidSchemaAggregateRating;
\t];
\tsh:property [
\t\tsh:path schema:alternativeHeadline;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:associatedMedia;
\t\tsh:node :ValidSchemaMediaObject;
\t];
\tsh:property [
\t\tsh:path schema:audience;
\t\tsh:node :ValidSchemaAudience;
\t];
\tsh:property [
\t\tsh:path schema:audio;
\t\tsh:or (
\t\t\t[sh:node :AudioObject]
\t\t\t[sh:node :Clip]
\t\t\t[sh:node :MusicRecording]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:author;
\t\tsh:or (
\t\t    [sh:node :Text]
\t\t    [sh:node :URL]
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:award;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:awards;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:character;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:citation;
\t\tsh:or (
\t\t\t[sh:node :CreativeWork]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:comment;
\t\tsh:node :ValidSchemaComment;
\t];
\tsh:property [
\t\tsh:path schema:commentCount;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:contentLocation;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:contentRating;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Rating]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:contributor;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:copyrightHolder;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:copyrightYear;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:creator;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:dateCreated;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:dateModified;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Date]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:datePublished;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:discussionUrl;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:editor;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:educationalAlignment;
\t\tsh:node :ValidSchemaAlignmentObject;
\t];
\tsh:property [
\t\tsh:path schema:educationalUse;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:encoding;
\t\tsh:node :ValidSchemaMediaObject;
\t];
\tsh:property [
\t\tsh:path schema:encodingFormat;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:encodings;
\t\tsh:node :ValidSchemaMediaObject;
\t];
\tsh:property [
\t\tsh:path schema:exampleOfWork;
\t\tsh:node :ValidSchemaCreativeWork;
\t];
\tsh:property [
\t\tsh:path schema:expires;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:fileFormat;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:funder;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:genre;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:hasPart;
\t\tsh:node :ValidSchemaCreativeWork;
\t];
\tsh:property [
\t\tsh:path schema:headline;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:inLanguage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Language]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:interactionStatistic;
\t\tsh:node :ValidSchemaInteractionCounter;
\t];
\tsh:property [
\t\tsh:path schema:interactivityType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:isAccessibleForFree;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:isBasedOn;
\t\tsh:or (
\t\t\t[sh:node :Product]
\t\t\t[sh:node :CreativeWork]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:isBasedOnUrl;
\t\tsh:or (
\t\t\t[sh:node :Product]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :CreativeWork]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:isFamilyFriendly;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:isPartOf;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :CreativeWork]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:keywords;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:learningResourceType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:license;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :CreativeWork]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:locationCreated;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:mainEntity;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:material;
\t\tsh:or (
\t\t\t[sh:node :Product]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:mentions;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:offers;
\t\tsh:or (
\t\t\t[sh:node :Demand]
\t\t\t[sh:node :Offer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:position;
\t\tsh:or (
\t\t\t[sh:node :Integer]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:producer;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:provider;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:publication;
\t\tsh:node :ValidSchemaPublicationEvent;
\t];
\tsh:property [
\t\tsh:path schema:publisher;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:publishingPrinciples;
\t\tsh:or (
\t\t\t[sh:node :CreativeWork]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:recordedAt;
\t\tsh:node :ValidSchemaEvent;
\t];
\tsh:property [
\t\tsh:path schema:releasedEvent;
\t\tsh:node :ValidSchemaPublicationEvent;
\t];
\tsh:property [
\t\tsh:path schema:review;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:reviews;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:schemaVersion;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:sourceOrganization;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:spatial;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:spatialCoverage;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:sponsor;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:temporal;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:temporalCoverage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:text;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:thumbnailUrl;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:timeRequired;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:translator;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:typicalAgeRange;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:version;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:video;
\t\tsh:or (
\t\t\t[sh:node :Clip]
\t\t\t[sh:node :VideoObject]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:workExample;
\t\tsh:node :ValidSchemaCreativeWork;
\t].



:ValidSchemaCssSelectorType a sh:NodeShape;
\tsh:targetClass schema:CssSelectorType;
\tsh:or (
        [sh:node :Text]
        [
            sh:targetClass schema:CssSelectorType;
            sh:nodeKind sh:BlankNodeOrIRI
        ]
    ).


:ValidSchemaDate a sh:NodeShape;
    sh:or(
        [
            sh:nodeKind sh:Literal;
            sh:pattern ".*"
        ]
        [sh:datatype xsd:date]
    ).




:ValidSchemaDateTime a sh:NodeShape;
    sh:or(
        [
            sh:nodeKind sh:Literal;
            sh:pattern ".*"
        ]
        [sh:datatype xsd:dateTime]
    ).



:ValidSchemaDuration a sh:NodeShape;
    sh:nodeKind sh:Literal;
    sh:pattern "^(-?)P(?=[0-9]|T[0-9])(?:([0-9]+)Y)?(?:([0-9]+)M)?(?:([0-9]+)([DW]))?(?:T(?:([0-9]+)H)?(?:([0-9]+)M)?(?:([0-9]+(?:\\\\.[0-9]+)?)S)?)?$".


:ValidSchemaHowTo a sh:NodeShape;
\tsh:targetClass schema:HowTo;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:estimatedCost;
\t\tsh:or (
\t\t\t[sh:node :MonetaryAmount]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:performTime;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:prepTime;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:step;
\t\tsh:or (
\t\t\t[sh:node :HowToStep]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :CreativeWork]
\t\t\t[sh:node :HowToSection]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:steps;
\t\tsh:or (
\t\t\t[sh:node :CreativeWork]
\t\t\t[sh:node :ItemList]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:supply;
\t\tsh:or (
\t\t\t[sh:node :HowToSupply]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:tool;
\t\tsh:or (
\t\t\t[sh:node :HowToTool]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:totalTime;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:yield;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Text]
\t\t);
\t].


:ValidSchemaImageObject a sh:NodeShape;
\tsh:targetClass schema:ImageObject;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:caption;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :MediaObject]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:exifData;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:class schema:PropertyValue]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:representativeOfPage;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:thumbnail;
\t\tsh:or (
\t\t    [sh:node :ImageObject]
\t\t    [sh:node :URL]
\t\t)
\t].


:ValidSchemaInteger a sh:NodeShape;
    sh:nodeKind sh:Literal;
    sh:or (
        [sh:pattern "^[ ]*([1-9][0-9]*|0)[ ]*$"]
        [ sh:datatype xsd:integer ]
    ).


:ValidSchemaNumber a sh:NodeShape;
    sh:or (
        [sh:node :Integer]
        [sh:datatype xsd:decimal]
    ).


:ValidSchemaNutritionInformation a sh:NodeShape;
\tsh:targetClass schema:NutritionInformation;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:calories;
\t\tsh:node :ValidSchemaEnergy;
\t];
\tsh:property [
\t\tsh:path schema:carbohydrateContent;
\t\tsh:node :ValidSchemaMass;
\t];
\tsh:property [
\t\tsh:path schema:cholesterolContent;
\t\tsh:node :ValidSchemaMass;
\t];
\tsh:property [
\t\tsh:path schema:fatContent;
\t\tsh:node :ValidSchemaMass;
\t];
\tsh:property [
\t\tsh:path schema:fiberContent;
\t\tsh:node :ValidSchemaMass;
\t];
\tsh:property [
\t\tsh:path schema:proteinContent;
\t\tsh:node :ValidSchemaMass;
\t];
\tsh:property [
\t\tsh:path schema:saturatedFatContent;
\t\tsh:node :ValidSchemaMass;
\t];
\tsh:property [
\t\tsh:path schema:servingSize;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:sodiumContent;
\t\tsh:node :ValidSchemaMass;
\t];
\tsh:property [
\t\tsh:path schema:sugarContent;
\t\tsh:node :ValidSchemaMass;
\t];
\tsh:property [
\t\tsh:path schema:transFatContent;
\t\tsh:node :ValidSchemaMass;
\t];
\tsh:property [
\t\tsh:path schema:unsaturatedFatContent;
\t\tsh:node :ValidSchemaMass;
\t].


:ValidSchemaPerson a sh:NodeShape;
\tsh:targetClass schema:Person;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:or(
\t    [sh:node :Text]
\t    [sh:node :URL]
\t    [
\t        sh:class schema:Person;
            \tsh:property [
            \t\tsh:path schema:additionalName;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:address;
            \t\tsh:or (
            \t\t\t[sh:class schema:PostalAddress]
            \t\t\t[sh:node :Text]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:affiliation;
            \t\tsh:class schema:Organization;
            \t];
            \tsh:property [
            \t\tsh:path schema:alumniOf;
            \t\tsh:or (
            \t\t\t[sh:class schema:EducationalOrganization]
            \t\t\t[sh:class schema:Organization]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:award;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:awards;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:birthDate;
            \t\tsh:node :ValidSchemaDate;
            \t];
            \tsh:property [
            \t\tsh:path schema:birthPlace;
            \t\tsh:class schema:Place;
            \t];
            \tsh:property [
            \t\tsh:path schema:brand;
            \t\tsh:or (
            \t\t\t[sh:class schema:Brand]
            \t\t\t[sh:class schema:Organization]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:children;
            \t\tsh:node :ValidSchemaPerson;
            \t];
            \tsh:property [
            \t\tsh:path schema:colleague;
            \t\tsh:or (
            \t\t\t[sh:node :URL]
            \t\t\t[sh:node :Person]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:colleagues;
            \t\tsh:node :ValidSchemaPerson;
            \t];
            \tsh:property [
            \t\tsh:path schema:contactPoint;
            \t\tsh:class schema:ContactPoint;
            \t];
            \tsh:property [
            \t\tsh:path schema:contactPoints;
            \t\tsh:class schema:ContactPoint;
            \t];
            \tsh:property [
            \t\tsh:path schema:deathDate;
            \t\tsh:node :ValidSchemaDate;
            \t];
            \tsh:property [
            \t\tsh:path schema:deathPlace;
            \t\tsh:class schema:Place;
            \t];
            \tsh:property [
            \t\tsh:path schema:duns;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:email;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:familyName;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:faxNumber;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:follows;
            \t\tsh:node :ValidSchemaPerson;
            \t];
            \tsh:property [
            \t\tsh:path schema:funder;
            \t\tsh:or (
            \t\t\t[sh:class schema:Organization]
            \t\t\t[sh:node :Person]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:givenName;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:globalLocationNumber;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:hasOccupation;
            \t\tsh:node :ValidSchemaOccupation;
            \t];
            \tsh:property [
            \t\tsh:path schema:hasOfferCatalog;
            \t\tsh:class schema:OfferCatalog;
            \t];
            \tsh:property [
            \t\tsh:path schema:hasPOS;
            \t\tsh:class schema:Place;
            \t];
            \tsh:property [
            \t\tsh:path schema:height;
            \t\tsh:or (
            \t\t\t[sh:class schema:QuantitativeValue]
            \t\t\t[sh:class schema:Distance]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:homeLocation;
            \t\tsh:or (
            \t\t\t[sh:class schema:ContactPoint]
            \t\t\t[sh:class schema:Place]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:honorificPrefix;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:honorificSuffix;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:interactionStatistic;
            \t\tsh:node :ValidSchemaInteractionCounter;
            \t];
            \tsh:property [
            \t\tsh:path schema:isicV4;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:knows;
            \t\tsh:node :ValidSchemaPerson;
            \t];
            \tsh:property [
            \t\tsh:path schema:makesOffer;
            \t\tsh:class schema:Offer;
            \t];
            \tsh:property [
            \t\tsh:path schema:memberOf;
            \t\tsh:or (
            \t\t\t[sh:class schema:Organization]
            \t\t\t[sh:class schema:ProgramMembership]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:naics;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:nationality;
            \t\tsh:node :ValidSchemaCountry;
            \t];
            \tsh:property [
            \t\tsh:path schema:netWorth;
            \t\tsh:or (
            \t\t\t[sh:class schema:MonetaryAmount]
            \t\t\t[sh:class schema:PriceSpecification]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:owns;
            \t\tsh:or (
            \t\t\t[sh:class schema:OwnershipInfo]
            \t\t\t[sh:class schema:Product]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:parent;
            \t\tsh:node :ValidSchemaPerson;
            \t];
            \tsh:property [
            \t\tsh:path schema:parents;
            \t\tsh:node :ValidSchemaPerson;
            \t];
            \tsh:property [
            \t\tsh:path schema:performerIn;
            \t\tsh:class schema:Event;
            \t];
            \tsh:property [
            \t\tsh:path schema:publishingPrinciples;
            \t\tsh:or (
            \t\t\t[sh:node :CreativeWork]
            \t\t\t[sh:node :URL]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:relatedTo;
            \t\tsh:node :ValidSchemaPerson;
            \t];
            \tsh:property [
            \t\tsh:path schema:seeks;
            \t\tsh:class schema:Demand;
            \t];
            \tsh:property [
            \t\tsh:path schema:sibling;
            \t\tsh:node :ValidSchemaPerson;
            \t];
            \tsh:property [
            \t\tsh:path schema:siblings;
            \t\tsh:node :ValidSchemaPerson;
            \t];
            \tsh:property [
            \t\tsh:path schema:sponsor;
            \t\tsh:or (
            \t\t\t[sh:class schema:Organization]
            \t\t\t[sh:node :Person]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:spouse;
            \t\tsh:node :ValidSchemaPerson;
            \t];
            \tsh:property [
            \t\tsh:path schema:taxID;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:telephone;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:vatID;
            \t\tsh:node :ValidSchemaText;
            \t];
            \tsh:property [
            \t\tsh:path schema:weight;
            \t\tsh:class schema:QuantitativeValue;
            \t];
            \tsh:property [
            \t\tsh:path schema:workLocation;
            \t\tsh:or (
            \t\t\t[sh:class schema:ContactPoint]
            \t\t\t[sh:class schema:Place]
            \t\t);
            \t];
            \tsh:property [
            \t\tsh:path schema:worksFor;
            \t\tsh:class schema:Organization;
            \t]
\t    ]
\t).



:ValidSchemaRecipe a sh:NodeShape;
\tsh:targetClass schema:Recipe;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:cookTime;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:cookingMethod;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:ingredients;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:nutrition;
\t\tsh:node :ValidSchemaNutritionInformation;
\t];
\tsh:property [
\t\tsh:path schema:recipeCategory;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:recipeCuisine;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:recipeIngredient;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:recipeInstructions;
\t\tsh:or (
\t\t\t[sh:node :CreativeWork]
\t\t\t[sh:node :ItemList]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:recipeYield;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:suitableForDiet;
\t\tsh:node :ValidSchemaRestrictedDiet;
\t].


:ValidSchemaText a sh:NodeShape;
    sh:or (
        [sh:datatype xsd:string]
        [sh:nodeKind sh:Literal]
    ).


:ValidSchemaThing a sh:NodeShape;
\tsh:targetClass schema:Thing;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:additionalType;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:alternateName;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:description;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:disambiguatingDescription;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:identifier;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :PropertyValue]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:image;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :ImageObject]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:mainEntityOfPage;
\t\tsh:or (
\t\t\t[sh:node :CreativeWork]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:name;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:potentialAction;
\t\tsh:node :ValidSchemaAction;
\t];
\tsh:property [
\t\tsh:path schema:sameAs;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:subjectOf;
\t\tsh:or (
\t\t\t[sh:node :Event]
\t\t\t[sh:node :CreativeWork]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:url;
\t\tsh:node :ValidSchemaURL;
\t].



:ValidSchemaSchemaURL a sh:NodeShape;
    sh:or (
        [sh:nodeKind sh:IRI]
        [sh:pattern "^(https?|gopher|ftps?):"]
    ).


:ValidSchemaAboutPage a sh:NodeShape;
\tsh:targetClass schema:AboutPage;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAcceptAction a sh:NodeShape;
\tsh:targetClass schema:AcceptAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAccommodation a sh:NodeShape;
\tsh:targetClass schema:Accommodation;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:amenityFeature;
\t\tsh:node :ValidSchemaLocationFeatureSpecification;
\t];
\tsh:property [
\t\tsh:path schema:floorSize;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:numberOfRooms;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:permittedUsage;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:petsAllowed;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Boolean]
\t\t);
\t].


:ValidSchemaAccountingService a sh:NodeShape;
\tsh:targetClass schema:AccountingService;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAchieveAction a sh:NodeShape;
\tsh:targetClass schema:AchieveAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAction a sh:NodeShape;
\tsh:targetClass schema:Action;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actionStatus;
\t\tsh:node :ValidSchemaActionStatusType;
\t];
\tsh:property [
\t\tsh:path schema:agent;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:endTime;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Time]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:error;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:instrument;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:location;
\t\tsh:or (
\t\t\t[sh:node :VirtualLocation]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :PostalAddress]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:object;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:participant;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:result;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:startTime;
\t\tsh:or (
\t\t\t[sh:node :Time]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:target;
\t\tsh:node :ValidSchemaEntryPoint;
\t].


:ValidSchemaActionAccessSpecification a sh:NodeShape;
\tsh:targetClass schema:ActionAccessSpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:availabilityEnds;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Time]
\t\t\t[sh:node :Date]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:availabilityStarts;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :Time]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:category;
\t\tsh:or (
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :PhysicalActivityCategory]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:eligibleRegion;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:expectsAcceptanceOf;
\t\tsh:node :ValidSchemaOffer;
\t];
\tsh:property [
\t\tsh:path schema:requiresSubscription;
\t\tsh:or (
\t\t\t[sh:node :MediaSubscription]
\t\t\t[sh:node :Boolean]
\t\t);
\t].


:ValidSchemaActionStatusType a sh:NodeShape;
\tsh:targetClass schema:ActionStatusType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaActivateAction a sh:NodeShape;
\tsh:targetClass schema:ActivateAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAddAction a sh:NodeShape;
\tsh:targetClass schema:AddAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAdministrativeArea a sh:NodeShape;
\tsh:targetClass schema:AdministrativeArea;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAdultEntertainment a sh:NodeShape;
\tsh:targetClass schema:AdultEntertainment;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAggregateOffer a sh:NodeShape;
\tsh:targetClass schema:AggregateOffer;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:highPrice;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:lowPrice;
\t\tsh:or (
\t\t\t[sh:node :Number]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:offerCount;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:offers;
\t\tsh:or (
\t\t\t[sh:node :Demand]
\t\t\t[sh:node :Offer]
\t\t);
\t].


:ValidSchemaAgreeAction a sh:NodeShape;
\tsh:targetClass schema:AgreeAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAirline a sh:NodeShape;
\tsh:targetClass schema:Airline;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:boardingPolicy;
\t\tsh:node :ValidSchemaBoardingPolicyType;
\t];
\tsh:property [
\t\tsh:path schema:iataCode;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaAirport a sh:NodeShape;
\tsh:targetClass schema:Airport;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:iataCode;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:icaoCode;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaAlignmentObject a sh:NodeShape;
\tsh:targetClass schema:AlignmentObject;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:alignmentType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:educationalFramework;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:targetDescription;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:targetName;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:targetUrl;
\t\tsh:node :ValidSchemaURL;
\t].


:ValidSchemaAllocateAction a sh:NodeShape;
\tsh:targetClass schema:AllocateAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAMRadioChannel a sh:NodeShape;
\tsh:targetClass schema:AMRadioChannel;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAmusementPark a sh:NodeShape;
\tsh:targetClass schema:AmusementPark;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAnimalShelter a sh:NodeShape;
\tsh:targetClass schema:AnimalShelter;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAnswer a sh:NodeShape;
\tsh:targetClass schema:Answer;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaApartment a sh:NodeShape;
\tsh:targetClass schema:Apartment;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:numberOfRooms;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:occupancy;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t].


:ValidSchemaApartmentComplex a sh:NodeShape;
\tsh:targetClass schema:ApartmentComplex;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:petsAllowed;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Boolean]
\t\t);
\t].


:ValidSchemaAPIReference a sh:NodeShape;
\tsh:targetClass schema:APIReference;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:assembly;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:assemblyVersion;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:executableLibraryName;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:programmingModel;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:targetPlatform;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaAppendAction a sh:NodeShape;
\tsh:targetClass schema:AppendAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaApplyAction a sh:NodeShape;
\tsh:targetClass schema:ApplyAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAquarium a sh:NodeShape;
\tsh:targetClass schema:Aquarium;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaArriveAction a sh:NodeShape;
\tsh:targetClass schema:ArriveAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaArtGallery a sh:NodeShape;
\tsh:targetClass schema:ArtGallery;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaArticle a sh:NodeShape;
\tsh:targetClass schema:Article;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:articleBody;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:articleSection;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:pageEnd;
\t\tsh:or (
\t\t\t[sh:node :Integer]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:pageStart;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Integer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:pagination;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:speakable;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :SpeakableSpecification]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:wordCount;
\t\tsh:node :ValidSchemaInteger;
\t].


:ValidSchemaAskAction a sh:NodeShape;
\tsh:targetClass schema:AskAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:question;
\t\tsh:node :ValidSchemaQuestion;
\t].


:ValidSchemaAssessAction a sh:NodeShape;
\tsh:targetClass schema:AssessAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAssignAction a sh:NodeShape;
\tsh:targetClass schema:AssignAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAttorney a sh:NodeShape;
\tsh:targetClass schema:Attorney;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAudience a sh:NodeShape;
\tsh:targetClass schema:Audience;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:audienceType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:geographicArea;
\t\tsh:node :ValidSchemaAdministrativeArea;
\t].


:ValidSchemaAudiobook a sh:NodeShape;
\tsh:targetClass schema:Audiobook;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:duration;
\t\tsh:node :ValidSchemaDuration;
\t].


:ValidSchemaAudioObject a sh:NodeShape;
\tsh:targetClass schema:AudioObject;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:caption;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :MediaObject]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:transcript;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaAuthorizeAction a sh:NodeShape;
\tsh:targetClass schema:AuthorizeAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:recipient;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Audience]
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaAutoBodyShop a sh:NodeShape;
\tsh:targetClass schema:AutoBodyShop;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAutoDealer a sh:NodeShape;
\tsh:targetClass schema:AutoDealer;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAutomatedTeller a sh:NodeShape;
\tsh:targetClass schema:AutomatedTeller;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAutomotiveBusiness a sh:NodeShape;
\tsh:targetClass schema:AutomotiveBusiness;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAutoPartsStore a sh:NodeShape;
\tsh:targetClass schema:AutoPartsStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAutoRental a sh:NodeShape;
\tsh:targetClass schema:AutoRental;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAutoRepair a sh:NodeShape;
\tsh:targetClass schema:AutoRepair;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaAutoWash a sh:NodeShape;
\tsh:targetClass schema:AutoWash;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBakery a sh:NodeShape;
\tsh:targetClass schema:Bakery;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBankAccount a sh:NodeShape;
\tsh:targetClass schema:BankAccount;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBankOrCreditUnion a sh:NodeShape;
\tsh:targetClass schema:BankOrCreditUnion;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBarcode a sh:NodeShape;
\tsh:targetClass schema:Barcode;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBarOrPub a sh:NodeShape;
\tsh:targetClass schema:BarOrPub;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBeach a sh:NodeShape;
\tsh:targetClass schema:Beach;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBeautySalon a sh:NodeShape;
\tsh:targetClass schema:BeautySalon;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBedAndBreakfast a sh:NodeShape;
\tsh:targetClass schema:BedAndBreakfast;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBedDetails a sh:NodeShape;
\tsh:targetClass schema:BedDetails;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:numberOfBeds;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:typeOfBed;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :BedType]
\t\t);
\t].


:ValidSchemaBedType a sh:NodeShape;
\tsh:targetClass schema:BedType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBefriendAction a sh:NodeShape;
\tsh:targetClass schema:BefriendAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBikeStore a sh:NodeShape;
\tsh:targetClass schema:BikeStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBlog a sh:NodeShape;
\tsh:targetClass schema:Blog;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:blogPost;
\t\tsh:node :ValidSchemaBlogPosting;
\t];
\tsh:property [
\t\tsh:path schema:blogPosts;
\t\tsh:node :ValidSchemaBlogPosting;
\t];
\tsh:property [
\t\tsh:path schema:issn;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaBlogPosting a sh:NodeShape;
\tsh:targetClass schema:BlogPosting;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBoardingPolicyType a sh:NodeShape;
\tsh:targetClass schema:BoardingPolicyType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBodyOfWater a sh:NodeShape;
\tsh:targetClass schema:BodyOfWater;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBook a sh:NodeShape;
\tsh:targetClass schema:Book;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:bookEdition;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:bookFormat;
\t\tsh:node :ValidSchemaBookFormatType;
\t];
\tsh:property [
\t\tsh:path schema:illustrator;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:isbn;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:numberOfPages;
\t\tsh:node :ValidSchemaInteger;
\t].


:ValidSchemaBookFormatType a sh:NodeShape;
\tsh:targetClass schema:BookFormatType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBookmarkAction a sh:NodeShape;
\tsh:targetClass schema:BookmarkAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBookSeries a sh:NodeShape;
\tsh:targetClass schema:BookSeries;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBookStore a sh:NodeShape;
\tsh:targetClass schema:BookStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBorrowAction a sh:NodeShape;
\tsh:targetClass schema:BorrowAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:lender;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaBowlingAlley a sh:NodeShape;
\tsh:targetClass schema:BowlingAlley;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBrand a sh:NodeShape;
\tsh:targetClass schema:Brand;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:aggregateRating;
\t\tsh:node :ValidSchemaAggregateRating;
\t];
\tsh:property [
\t\tsh:path schema:logo;
\t\tsh:or (
\t\t\t[sh:node :ImageObject]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:review;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:slogan;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaBreadcrumbList a sh:NodeShape;
\tsh:targetClass schema:BreadcrumbList;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBrewery a sh:NodeShape;
\tsh:targetClass schema:Brewery;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBridge a sh:NodeShape;
\tsh:targetClass schema:Bridge;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBroadcastChannel a sh:NodeShape;
\tsh:targetClass schema:BroadcastChannel;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:broadcastChannelId;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:broadcastFrequency;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :BroadcastFrequencySpecification]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:broadcastServiceTier;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:genre;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:inBroadcastLineup;
\t\tsh:node :ValidSchemaCableOrSatelliteService;
\t];
\tsh:property [
\t\tsh:path schema:providesBroadcastService;
\t\tsh:node :ValidSchemaBroadcastService;
\t].


:ValidSchemaBroadcastEvent a sh:NodeShape;
\tsh:targetClass schema:BroadcastEvent;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:broadcastOfEvent;
\t\tsh:node :ValidSchemaEvent;
\t];
\tsh:property [
\t\tsh:path schema:isLiveBroadcast;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:videoFormat;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaBroadcastFrequencySpecification a sh:NodeShape;
\tsh:targetClass schema:BroadcastFrequencySpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:broadcastFrequencyValue;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t);
\t].


:ValidSchemaBroadcastService a sh:NodeShape;
\tsh:targetClass schema:BroadcastService;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:area;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:broadcastAffiliateOf;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:broadcastDisplayName;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:broadcastFrequency;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :BroadcastFrequencySpecification]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:broadcastTimezone;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:broadcaster;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:hasBroadcastChannel;
\t\tsh:node :ValidSchemaBroadcastChannel;
\t];
\tsh:property [
\t\tsh:path schema:inLanguage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Language]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:parentService;
\t\tsh:node :ValidSchemaBroadcastService;
\t];
\tsh:property [
\t\tsh:path schema:videoFormat;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaBuddhistTemple a sh:NodeShape;
\tsh:targetClass schema:BuddhistTemple;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBusinessAudience a sh:NodeShape;
\tsh:targetClass schema:BusinessAudience;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:numberOfEmployees;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:yearlyRevenue;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:yearsInOperation;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t].


:ValidSchemaBusinessEntityType a sh:NodeShape;
\tsh:targetClass schema:BusinessEntityType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBusinessEvent a sh:NodeShape;
\tsh:targetClass schema:BusinessEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBusinessFunction a sh:NodeShape;
\tsh:targetClass schema:BusinessFunction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBusReservation a sh:NodeShape;
\tsh:targetClass schema:BusReservation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBusStation a sh:NodeShape;
\tsh:targetClass schema:BusStation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBusStop a sh:NodeShape;
\tsh:targetClass schema:BusStop;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaBusTrip a sh:NodeShape;
\tsh:targetClass schema:BusTrip;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:arrivalBusStop;
\t\tsh:or (
\t\t\t[sh:node :BusStop]
\t\t\t[sh:node :BusStation]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:busName;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:busNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:departureBusStop;
\t\tsh:or (
\t\t\t[sh:node :BusStation]
\t\t\t[sh:node :BusStop]
\t\t);
\t].


:ValidSchemaBuyAction a sh:NodeShape;
\tsh:targetClass schema:BuyAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:seller;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:vendor;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:warrantyPromise;
\t\tsh:node :ValidSchemaWarrantyPromise;
\t].


:ValidSchemaCableOrSatelliteService a sh:NodeShape;
\tsh:targetClass schema:CableOrSatelliteService;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCafeOrCoffeeShop a sh:NodeShape;
\tsh:targetClass schema:CafeOrCoffeeShop;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCampground a sh:NodeShape;
\tsh:targetClass schema:Campground;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCampingPitch a sh:NodeShape;
\tsh:targetClass schema:CampingPitch;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCanal a sh:NodeShape;
\tsh:targetClass schema:Canal;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCancelAction a sh:NodeShape;
\tsh:targetClass schema:CancelAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCar a sh:NodeShape;
\tsh:targetClass schema:Car;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCasino a sh:NodeShape;
\tsh:targetClass schema:Casino;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCatholicChurch a sh:NodeShape;
\tsh:targetClass schema:CatholicChurch;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCDCPMDRecord a sh:NodeShape;
\tsh:targetClass schema:CDCPMDRecord;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:datePosted;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Date]
\t\t);
\t].


:ValidSchemaCemetery a sh:NodeShape;
\tsh:targetClass schema:Cemetery;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaChapter a sh:NodeShape;
\tsh:targetClass schema:Chapter;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:pageEnd;
\t\tsh:or (
\t\t\t[sh:node :Integer]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:pageStart;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Integer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:pagination;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaCheckAction a sh:NodeShape;
\tsh:targetClass schema:CheckAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCheckInAction a sh:NodeShape;
\tsh:targetClass schema:CheckInAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCheckOutAction a sh:NodeShape;
\tsh:targetClass schema:CheckOutAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCheckoutPage a sh:NodeShape;
\tsh:targetClass schema:CheckoutPage;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaChildCare a sh:NodeShape;
\tsh:targetClass schema:ChildCare;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaChildrensEvent a sh:NodeShape;
\tsh:targetClass schema:ChildrensEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaChooseAction a sh:NodeShape;
\tsh:targetClass schema:ChooseAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actionOption;
\t\tsh:or (
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:option;
\t\tsh:or (
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :Text]
\t\t);
\t].


:ValidSchemaChurch a sh:NodeShape;
\tsh:targetClass schema:Church;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCity a sh:NodeShape;
\tsh:targetClass schema:City;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCityHall a sh:NodeShape;
\tsh:targetClass schema:CityHall;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCivicStructure a sh:NodeShape;
\tsh:targetClass schema:CivicStructure;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:openingHours;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaClaimReview a sh:NodeShape;
\tsh:targetClass schema:ClaimReview;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:claimReviewed;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaClip a sh:NodeShape;
\tsh:targetClass schema:Clip;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actor;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:actors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:clipNumber;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Integer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:director;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:directors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:musicBy;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :MusicGroup]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:partOfEpisode;
\t\tsh:node :ValidSchemaEpisode;
\t];
\tsh:property [
\t\tsh:path schema:partOfSeason;
\t\tsh:node :ValidSchemaCreativeWorkSeason;
\t];
\tsh:property [
\t\tsh:path schema:partOfSeries;
\t\tsh:node :ValidSchemaCreativeWorkSeries;
\t].


:ValidSchemaClothingStore a sh:NodeShape;
\tsh:targetClass schema:ClothingStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCode a sh:NodeShape;
\tsh:targetClass schema:Code;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCollectionPage a sh:NodeShape;
\tsh:targetClass schema:CollectionPage;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCollegeOrUniversity a sh:NodeShape;
\tsh:targetClass schema:CollegeOrUniversity;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaComedyClub a sh:NodeShape;
\tsh:targetClass schema:ComedyClub;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaComedyEvent a sh:NodeShape;
\tsh:targetClass schema:ComedyEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaComment a sh:NodeShape;
\tsh:targetClass schema:Comment;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:downvoteCount;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:parentItem;
\t\tsh:node :ValidSchemaQuestion;
\t];
\tsh:property [
\t\tsh:path schema:upvoteCount;
\t\tsh:node :ValidSchemaInteger;
\t].


:ValidSchemaCommentAction a sh:NodeShape;
\tsh:targetClass schema:CommentAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:resultComment;
\t\tsh:node :ValidSchemaComment;
\t].


:ValidSchemaCommunicateAction a sh:NodeShape;
\tsh:targetClass schema:CommunicateAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:about;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:inLanguage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Language]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:language;
\t\tsh:node :ValidSchemaLanguage;
\t];
\tsh:property [
\t\tsh:path schema:recipient;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Audience]
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaCompoundPriceSpecification a sh:NodeShape;
\tsh:targetClass schema:CompoundPriceSpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:priceComponent;
\t\tsh:node :ValidSchemaUnitPriceSpecification;
\t].


:ValidSchemaComputerLanguage a sh:NodeShape;
\tsh:targetClass schema:ComputerLanguage;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaComputerStore a sh:NodeShape;
\tsh:targetClass schema:ComputerStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaConfirmAction a sh:NodeShape;
\tsh:targetClass schema:ConfirmAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaConsumeAction a sh:NodeShape;
\tsh:targetClass schema:ConsumeAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actionAccessibilityRequirement;
\t\tsh:node :ValidSchemaActionAccessSpecification;
\t];
\tsh:property [
\t\tsh:path schema:expectsAcceptanceOf;
\t\tsh:node :ValidSchemaOffer;
\t].


:ValidSchemaContactPage a sh:NodeShape;
\tsh:targetClass schema:ContactPage;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaContactPoint a sh:NodeShape;
\tsh:targetClass schema:ContactPoint;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:areaServed;
\t\tsh:or (
\t\t\t[sh:node :AdministrativeArea]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:availableLanguage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Language]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:contactOption;
\t\tsh:node :ValidSchemaContactPointOption;
\t];
\tsh:property [
\t\tsh:path schema:contactType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:email;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:faxNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:hoursAvailable;
\t\tsh:node :ValidSchemaOpeningHoursSpecification;
\t];
\tsh:property [
\t\tsh:path schema:productSupported;
\t\tsh:or (
\t\t\t[sh:node :Product]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:serviceArea;
\t\tsh:or (
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t\t[sh:node :AdministrativeArea]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:telephone;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaContactPointOption a sh:NodeShape;
\tsh:targetClass schema:ContactPointOption;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaContinent a sh:NodeShape;
\tsh:targetClass schema:Continent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaControlAction a sh:NodeShape;
\tsh:targetClass schema:ControlAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaConvenienceStore a sh:NodeShape;
\tsh:targetClass schema:ConvenienceStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaConversation a sh:NodeShape;
\tsh:targetClass schema:Conversation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCookAction a sh:NodeShape;
\tsh:targetClass schema:CookAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:foodEstablishment;
\t\tsh:or (
\t\t\t[sh:node :FoodEstablishment]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:foodEvent;
\t\tsh:node :ValidSchemaFoodEvent;
\t];
\tsh:property [
\t\tsh:path schema:recipe;
\t\tsh:node :ValidSchemaRecipe;
\t].


:ValidSchemaCorporation a sh:NodeShape;
\tsh:targetClass schema:Corporation;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:tickerSymbol;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaCountry a sh:NodeShape;
\tsh:targetClass schema:Country;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCourse a sh:NodeShape;
\tsh:targetClass schema:Course;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:courseCode;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:coursePrerequisites;
\t\tsh:or (
\t\t\t[sh:node :Course]
\t\t\t[sh:node :AlignmentObject]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:educationalCredentialAwarded;
\t\tsh:or (
\t\t\t[sh:node :EducationalOccupationalCredential]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:hasCourseInstance;
\t\tsh:node :ValidSchemaCourseInstance;
\t].


:ValidSchemaCourseInstance a sh:NodeShape;
\tsh:targetClass schema:CourseInstance;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:courseMode;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:instructor;
\t\tsh:node :ValidSchemaPerson;
\t].


:ValidSchemaCourthouse a sh:NodeShape;
\tsh:targetClass schema:Courthouse;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCreateAction a sh:NodeShape;
\tsh:targetClass schema:CreateAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCreativeWorkSeason a sh:NodeShape;
\tsh:targetClass schema:CreativeWorkSeason;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actor;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:director;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:endDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:episode;
\t\tsh:node :ValidSchemaEpisode;
\t];
\tsh:property [
\t\tsh:path schema:episodes;
\t\tsh:node :ValidSchemaEpisode;
\t];
\tsh:property [
\t\tsh:path schema:numberOfEpisodes;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:partOfSeries;
\t\tsh:node :ValidSchemaCreativeWorkSeries;
\t];
\tsh:property [
\t\tsh:path schema:productionCompany;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:seasonNumber;
\t\tsh:or (
\t\t\t[sh:node :Integer]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:startDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:trailer;
\t\tsh:node :ValidSchemaVideoObject;
\t].


:ValidSchemaCreativeWorkSeries a sh:NodeShape;
\tsh:targetClass schema:CreativeWorkSeries;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:endDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:issn;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:startDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t].


:ValidSchemaCreditCard a sh:NodeShape;
\tsh:targetClass schema:CreditCard;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCrematorium a sh:NodeShape;
\tsh:targetClass schema:Crematorium;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaCurrencyConversionService a sh:NodeShape;
\tsh:targetClass schema:CurrencyConversionService;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDanceEvent a sh:NodeShape;
\tsh:targetClass schema:DanceEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDanceGroup a sh:NodeShape;
\tsh:targetClass schema:DanceGroup;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDataCatalog a sh:NodeShape;
\tsh:targetClass schema:DataCatalog;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:dataset;
\t\tsh:node :ValidSchemaDataset;
\t].


:ValidSchemaDataDownload a sh:NodeShape;
\tsh:targetClass schema:DataDownload;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDataFeed a sh:NodeShape;
\tsh:targetClass schema:DataFeed;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:dataFeedElement;
\t\tsh:or (
\t\t\t[sh:node :DataFeedItem]
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :Text]
\t\t);
\t].


:ValidSchemaDataFeedItem a sh:NodeShape;
\tsh:targetClass schema:DataFeedItem;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:dateCreated;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:dateDeleted;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:dateModified;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Date]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:item;
\t\tsh:node :ValidSchemaThing;
\t].


:ValidSchemaDataset a sh:NodeShape;
\tsh:targetClass schema:Dataset;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:catalog;
\t\tsh:node :ValidSchemaDataCatalog;
\t];
\tsh:property [
\t\tsh:path schema:datasetTimeInterval;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:distribution;
\t\tsh:node :ValidSchemaDataDownload;
\t];
\tsh:property [
\t\tsh:path schema:includedDataCatalog;
\t\tsh:node :ValidSchemaDataCatalog;
\t];
\tsh:property [
\t\tsh:path schema:includedInDataCatalog;
\t\tsh:node :ValidSchemaDataCatalog;
\t];
\tsh:property [
\t\tsh:path schema:issn;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaDataType a sh:NodeShape;
\tsh:targetClass schema:DataType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDatedMoneySpecification a sh:NodeShape;
\tsh:targetClass schema:DatedMoneySpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:amount;
\t\tsh:or (
\t\t\t[sh:node :MonetaryAmount]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:currency;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:endDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:startDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t].


:ValidSchemaDayOfWeek a sh:NodeShape;
\tsh:targetClass schema:DayOfWeek;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDaySpa a sh:NodeShape;
\tsh:targetClass schema:DaySpa;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDeactivateAction a sh:NodeShape;
\tsh:targetClass schema:DeactivateAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDefenceEstablishment a sh:NodeShape;
\tsh:targetClass schema:DefenceEstablishment;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDefinedRegion a sh:NodeShape;
\tsh:targetClass schema:DefinedRegion;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:addressCountry;
\t\tsh:or (
\t\t\t[sh:node :Country]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:addressRegion;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:postalCode;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaDefinedTerm a sh:NodeShape;
\tsh:targetClass schema:DefinedTerm;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDeleteAction a sh:NodeShape;
\tsh:targetClass schema:DeleteAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDeliveryChargeSpecification a sh:NodeShape;
\tsh:targetClass schema:DeliveryChargeSpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:appliesToDeliveryMethod;
\t\tsh:node :ValidSchemaDeliveryMethod;
\t];
\tsh:property [
\t\tsh:path schema:areaServed;
\t\tsh:or (
\t\t\t[sh:node :AdministrativeArea]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:eligibleRegion;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t);
\t].


:ValidSchemaDeliveryEvent a sh:NodeShape;
\tsh:targetClass schema:DeliveryEvent;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:accessCode;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:availableFrom;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:availableThrough;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:hasDeliveryMethod;
\t\tsh:node :ValidSchemaDeliveryMethod;
\t].


:ValidSchemaDeliveryMethod a sh:NodeShape;
\tsh:targetClass schema:DeliveryMethod;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDemand a sh:NodeShape;
\tsh:targetClass schema:Demand;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:acceptedPaymentMethod;
\t\tsh:or (
\t\t\t[sh:node :LoanOrCredit]
\t\t\t[sh:node :PaymentMethod]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:advanceBookingRequirement;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:areaServed;
\t\tsh:or (
\t\t\t[sh:node :AdministrativeArea]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:availability;
\t\tsh:node :ValidSchemaItemAvailability;
\t];
\tsh:property [
\t\tsh:path schema:availabilityEnds;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Time]
\t\t\t[sh:node :Date]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:availabilityStarts;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :Time]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:availableAtOrFrom;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:availableDeliveryMethod;
\t\tsh:node :ValidSchemaDeliveryMethod;
\t];
\tsh:property [
\t\tsh:path schema:businessFunction;
\t\tsh:node :ValidSchemaBusinessFunction;
\t];
\tsh:property [
\t\tsh:path schema:deliveryLeadTime;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:eligibleCustomerType;
\t\tsh:node :ValidSchemaBusinessEntityType;
\t];
\tsh:property [
\t\tsh:path schema:eligibleDuration;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:eligibleQuantity;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:eligibleRegion;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:eligibleTransactionVolume;
\t\tsh:node :ValidSchemaPriceSpecification;
\t];
\tsh:property [
\t\tsh:path schema:gtin12;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:gtin13;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:gtin14;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:gtin8;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:includesObject;
\t\tsh:node :ValidSchemaTypeAndQuantityNode;
\t];
\tsh:property [
\t\tsh:path schema:inventoryLevel;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:itemCondition;
\t\tsh:node :ValidSchemaOfferItemCondition;
\t];
\tsh:property [
\t\tsh:path schema:itemOffered;
\t\tsh:or (
\t\t\t[sh:node :AggregateOffer]
\t\t\t[sh:node :Product]
\t\t\t[sh:node :CreativeWork]
\t\t\t[sh:node :Service]
\t\t\t[sh:node :MenuItem]
\t\t\t[sh:node :Trip]
\t\t\t[sh:node :Event]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:mpn;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:priceSpecification;
\t\tsh:node :ValidSchemaPriceSpecification;
\t];
\tsh:property [
\t\tsh:path schema:seller;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:serialNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:sku;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:validFrom;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:validThrough;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:warranty;
\t\tsh:node :ValidSchemaWarrantyPromise;
\t].


:ValidSchemaDentist a sh:NodeShape;
\tsh:targetClass schema:Dentist;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDepartAction a sh:NodeShape;
\tsh:targetClass schema:DepartAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDepartmentStore a sh:NodeShape;
\tsh:targetClass schema:DepartmentStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDepositAccount a sh:NodeShape;
\tsh:targetClass schema:DepositAccount;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDietarySupplement a sh:NodeShape;
\tsh:targetClass schema:DietarySupplement;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:manufacturer;
\t\tsh:node :ValidSchemaOrganization;
\t].


:ValidSchemaDigitalDocument a sh:NodeShape;
\tsh:targetClass schema:DigitalDocument;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:hasDigitalDocumentPermission;
\t\tsh:node :ValidSchemaDigitalDocumentPermission;
\t].


:ValidSchemaDigitalDocumentPermission a sh:NodeShape;
\tsh:targetClass schema:DigitalDocumentPermission;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:grantee;
\t\tsh:or (
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Audience]
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:permissionType;
\t\tsh:node :ValidSchemaDigitalDocumentPermissionType;
\t].


:ValidSchemaDigitalDocumentPermissionType a sh:NodeShape;
\tsh:targetClass schema:DigitalDocumentPermissionType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDisagreeAction a sh:NodeShape;
\tsh:targetClass schema:DisagreeAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDiscoverAction a sh:NodeShape;
\tsh:targetClass schema:DiscoverAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDiscussionForumPosting a sh:NodeShape;
\tsh:targetClass schema:DiscussionForumPosting;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDislikeAction a sh:NodeShape;
\tsh:targetClass schema:DislikeAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDistance a sh:NodeShape;
    sh:or (
        [
            sh:targetClass schema:Distance;
            sh:nodeKind sh:BlankNodeOrIRI
        ]
        [
            sh:node :ValidSchemaText;
            sh:pattern "^[ ]*([1-9][0-9]*|0)[ ]*[a-zA-Z]*[ ]*$"
        ]
    ).




:ValidSchemaDistillery a sh:NodeShape;
\tsh:targetClass schema:Distillery;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDonateAction a sh:NodeShape;
\tsh:targetClass schema:DonateAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:recipient;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Audience]
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaDownloadAction a sh:NodeShape;
\tsh:targetClass schema:DownloadAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDrawAction a sh:NodeShape;
\tsh:targetClass schema:DrawAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDrinkAction a sh:NodeShape;
\tsh:targetClass schema:DrinkAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDriveWheelConfigurationValue a sh:NodeShape;
\tsh:targetClass schema:DriveWheelConfigurationValue;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaDrug a sh:NodeShape;
\tsh:targetClass schema:Drug;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:manufacturer;
\t\tsh:node :ValidSchemaOrganization;
\t].


:ValidSchemaDryCleaningOrLaundry a sh:NodeShape;
\tsh:targetClass schema:DryCleaningOrLaundry;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEatAction a sh:NodeShape;
\tsh:targetClass schema:EatAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEducationalAudience a sh:NodeShape;
\tsh:targetClass schema:EducationalAudience;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:educationalRole;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaEducationalOccupationalCredential a sh:NodeShape;
\tsh:targetClass schema:EducationalOccupationalCredential;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:validFor;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:validIn;
\t\tsh:node :ValidSchemaAdministrativeArea;
\t].


:ValidSchemaEducationalOccupationalProgram a sh:NodeShape;
\tsh:targetClass schema:EducationalOccupationalProgram;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:dayOfWeek;
\t\tsh:node :ValidSchemaDayOfWeek;
\t];
\tsh:property [
\t\tsh:path schema:educationalCredentialAwarded;
\t\tsh:or (
\t\t\t[sh:node :EducationalOccupationalCredential]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:endDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:offers;
\t\tsh:or (
\t\t\t[sh:node :Demand]
\t\t\t[sh:node :Offer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:provider;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:startDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t].


:ValidSchemaEducationalOrganization a sh:NodeShape;
\tsh:targetClass schema:EducationalOrganization;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:alumni;
\t\tsh:node :ValidSchemaPerson;
\t].


:ValidSchemaEducationEvent a sh:NodeShape;
\tsh:targetClass schema:EducationEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaElectrician a sh:NodeShape;
\tsh:targetClass schema:Electrician;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaElectronicsStore a sh:NodeShape;
\tsh:targetClass schema:ElectronicsStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaElementarySchool a sh:NodeShape;
\tsh:targetClass schema:ElementarySchool;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEmailMessage a sh:NodeShape;
\tsh:targetClass schema:EmailMessage;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEmbassy a sh:NodeShape;
\tsh:targetClass schema:Embassy;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEmergencyService a sh:NodeShape;
\tsh:targetClass schema:EmergencyService;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEmployeeRole a sh:NodeShape;
\tsh:targetClass schema:EmployeeRole;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:baseSalary;
\t\tsh:or (
\t\t\t[sh:node :PriceSpecification]
\t\t\t[sh:node :MonetaryAmount]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:salaryCurrency;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaEmployerAggregateRating a sh:NodeShape;
\tsh:targetClass schema:EmployerAggregateRating;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEmploymentAgency a sh:NodeShape;
\tsh:targetClass schema:EmploymentAgency;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEndorseAction a sh:NodeShape;
\tsh:targetClass schema:EndorseAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:endorsee;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaEndorsementRating a sh:NodeShape;
\tsh:targetClass schema:EndorsementRating;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEnergy a sh:NodeShape;
\tsh:targetClass schema:Energy;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEngineSpecification a sh:NodeShape;
\tsh:targetClass schema:EngineSpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:fuelType;
\t\tsh:or (
\t\t\t[sh:node :QualitativeValue]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t].


:ValidSchemaEntertainmentBusiness a sh:NodeShape;
\tsh:targetClass schema:EntertainmentBusiness;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEntryPoint a sh:NodeShape;
\tsh:targetClass schema:EntryPoint;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actionApplication;
\t\tsh:node :ValidSchemaSoftwareApplication;
\t];
\tsh:property [
\t\tsh:path schema:actionPlatform;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:application;
\t\tsh:node :ValidSchemaSoftwareApplication;
\t];
\tsh:property [
\t\tsh:path schema:contentType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:encodingType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:httpMethod;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:urlTemplate;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaEnumeration a sh:NodeShape;
\tsh:targetClass schema:Enumeration;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEpisode a sh:NodeShape;
\tsh:targetClass schema:Episode;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actor;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:actors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:director;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:directors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:episodeNumber;
\t\tsh:or (
\t\t\t[sh:node :Integer]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:musicBy;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :MusicGroup]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:partOfSeason;
\t\tsh:node :ValidSchemaCreativeWorkSeason;
\t];
\tsh:property [
\t\tsh:path schema:partOfSeries;
\t\tsh:node :ValidSchemaCreativeWorkSeries;
\t];
\tsh:property [
\t\tsh:path schema:productionCompany;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:trailer;
\t\tsh:node :ValidSchemaVideoObject;
\t].


:ValidSchemaEvent a sh:NodeShape;
\tsh:targetClass schema:Event;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:about;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:actor;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:aggregateRating;
\t\tsh:node :ValidSchemaAggregateRating;
\t];
\tsh:property [
\t\tsh:path schema:attendee;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:attendees;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:audience;
\t\tsh:node :ValidSchemaAudience;
\t];
\tsh:property [
\t\tsh:path schema:composer;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:contributor;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:director;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:doorTime;
\t\tsh:or (
\t\t\t[sh:node :Time]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:duration;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:endDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:eventStatus;
\t\tsh:node :ValidSchemaEventStatusType;
\t];
\tsh:property [
\t\tsh:path schema:funder;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:inLanguage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Language]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:isAccessibleForFree;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:location;
\t\tsh:or (
\t\t\t[sh:node :VirtualLocation]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :PostalAddress]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:maximumAttendeeCapacity;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:offers;
\t\tsh:or (
\t\t\t[sh:node :Demand]
\t\t\t[sh:node :Offer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:organizer;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:performer;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:performers;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:previousStartDate;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:recordedIn;
\t\tsh:node :ValidSchemaCreativeWork;
\t];
\tsh:property [
\t\tsh:path schema:remainingAttendeeCapacity;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:review;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:sponsor;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:startDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:subEvent;
\t\tsh:node :ValidSchemaEvent;
\t];
\tsh:property [
\t\tsh:path schema:subEvents;
\t\tsh:node :ValidSchemaEvent;
\t];
\tsh:property [
\t\tsh:path schema:superEvent;
\t\tsh:node :ValidSchemaEvent;
\t];
\tsh:property [
\t\tsh:path schema:translator;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:typicalAgeRange;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:workFeatured;
\t\tsh:node :ValidSchemaCreativeWork;
\t];
\tsh:property [
\t\tsh:path schema:workPerformed;
\t\tsh:node :ValidSchemaCreativeWork;
\t].


:ValidSchemaEventReservation a sh:NodeShape;
\tsh:targetClass schema:EventReservation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEventStatusType a sh:NodeShape;
\tsh:targetClass schema:EventStatusType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaEventVenue a sh:NodeShape;
\tsh:targetClass schema:EventVenue;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaExchangeRateSpecification a sh:NodeShape;
\tsh:targetClass schema:ExchangeRateSpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:currency;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaExerciseAction a sh:NodeShape;
\tsh:targetClass schema:ExerciseAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:course;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:distance;
\t\tsh:node :ValidSchemaDistance;
\t];
\tsh:property [
\t\tsh:path schema:exerciseCourse;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:fromLocation;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:opponent;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:sportsActivityLocation;
\t\tsh:node :ValidSchemaSportsActivityLocation;
\t];
\tsh:property [
\t\tsh:path schema:sportsEvent;
\t\tsh:node :ValidSchemaSportsEvent;
\t];
\tsh:property [
\t\tsh:path schema:sportsTeam;
\t\tsh:node :ValidSchemaSportsTeam;
\t];
\tsh:property [
\t\tsh:path schema:toLocation;
\t\tsh:node :ValidSchemaPlace;
\t].


:ValidSchemaExerciseGym a sh:NodeShape;
\tsh:targetClass schema:ExerciseGym;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaExhibitionEvent a sh:NodeShape;
\tsh:targetClass schema:ExhibitionEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaFAQPage a sh:NodeShape;
\tsh:targetClass schema:FAQPage;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaFastFoodRestaurant a sh:NodeShape;
\tsh:targetClass schema:FastFoodRestaurant;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaFestival a sh:NodeShape;
\tsh:targetClass schema:Festival;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaFilmAction a sh:NodeShape;
\tsh:targetClass schema:FilmAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaFinancialProduct a sh:NodeShape;
\tsh:targetClass schema:FinancialProduct;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:annualPercentageRate;
\t\tsh:or (
\t\t\t[sh:node :Number]
\t\t\t[sh:node :QuantitativeValue]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:feesAndCommissionsSpecification;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:interestRate;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t);
\t].


:ValidSchemaFinancialService a sh:NodeShape;
\tsh:targetClass schema:FinancialService;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:feesAndCommissionsSpecification;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t].


:ValidSchemaFindAction a sh:NodeShape;
\tsh:targetClass schema:FindAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaFireStation a sh:NodeShape;
\tsh:targetClass schema:FireStation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaFlight a sh:NodeShape;
\tsh:targetClass schema:Flight;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:aircraft;
\t\tsh:or (
\t\t\t[sh:node :Vehicle]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:arrivalAirport;
\t\tsh:node :ValidSchemaAirport;
\t];
\tsh:property [
\t\tsh:path schema:arrivalGate;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:arrivalTerminal;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:boardingPolicy;
\t\tsh:node :ValidSchemaBoardingPolicyType;
\t];
\tsh:property [
\t\tsh:path schema:carrier;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:departureAirport;
\t\tsh:node :ValidSchemaAirport;
\t];
\tsh:property [
\t\tsh:path schema:departureGate;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:departureTerminal;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:estimatedFlightDuration;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Duration]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:flightDistance;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Distance]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:flightNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:mealService;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:seller;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:webCheckinTime;
\t\tsh:node :ValidSchemaDateTime;
\t].


:ValidSchemaFlightReservation a sh:NodeShape;
\tsh:targetClass schema:FlightReservation;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:boardingGroup;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:passengerPriorityStatus;
\t\tsh:or (
\t\t\t[sh:node :QualitativeValue]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:passengerSequenceNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:securityScreening;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaFloat a sh:NodeShape;
\tsh:targetClass schema:Float;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaFloorPlan a sh:NodeShape;
\tsh:targetClass schema:FloorPlan;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:amenityFeature;
\t\tsh:node :ValidSchemaLocationFeatureSpecification;
\t];
\tsh:property [
\t\tsh:path schema:floorSize;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:numberOfRooms;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:petsAllowed;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Boolean]
\t\t);
\t].


:ValidSchemaFlorist a sh:NodeShape;
\tsh:targetClass schema:Florist;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaFMRadioChannel a sh:NodeShape;
\tsh:targetClass schema:FMRadioChannel;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaFollowAction a sh:NodeShape;
\tsh:targetClass schema:FollowAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:followee;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaFoodEstablishment a sh:NodeShape;
\tsh:targetClass schema:FoodEstablishment;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:acceptsReservations;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Boolean]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:hasMenu;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Menu]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:menu;
\t\tsh:or (
\t\t\t[sh:node :Menu]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:servesCuisine;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:starRating;
\t\tsh:node :ValidSchemaRating;
\t].


:ValidSchemaFoodEstablishmentReservation a sh:NodeShape;
\tsh:targetClass schema:FoodEstablishmentReservation;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:endTime;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Time]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:partySize;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Integer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:startTime;
\t\tsh:or (
\t\t\t[sh:node :Time]
\t\t\t[sh:node :DateTime]
\t\t);
\t].


:ValidSchemaFoodEvent a sh:NodeShape;
\tsh:targetClass schema:FoodEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaFoodService a sh:NodeShape;
\tsh:targetClass schema:FoodService;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaFurnitureStore a sh:NodeShape;
\tsh:targetClass schema:FurnitureStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGame a sh:NodeShape;
\tsh:targetClass schema:Game;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:characterAttribute;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:gameItem;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:gameLocation;
\t\tsh:or (
\t\t\t[sh:node :PostalAddress]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numberOfPlayers;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:quest;
\t\tsh:node :ValidSchemaThing;
\t].


:ValidSchemaGamePlayMode a sh:NodeShape;
\tsh:targetClass schema:GamePlayMode;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGameServer a sh:NodeShape;
\tsh:targetClass schema:GameServer;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:game;
\t\tsh:node :ValidSchemaVideoGame;
\t];
\tsh:property [
\t\tsh:path schema:playersOnline;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:serverStatus;
\t\tsh:node :ValidSchemaGameServerStatus;
\t].


:ValidSchemaGameServerStatus a sh:NodeShape;
\tsh:targetClass schema:GameServerStatus;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGardenStore a sh:NodeShape;
\tsh:targetClass schema:GardenStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGasStation a sh:NodeShape;
\tsh:targetClass schema:GasStation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGatedResidenceCommunity a sh:NodeShape;
\tsh:targetClass schema:GatedResidenceCommunity;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGenderType a sh:NodeShape;
\tsh:targetClass schema:GenderType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGeneralContractor a sh:NodeShape;
\tsh:targetClass schema:GeneralContractor;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGeoCircle a sh:NodeShape;
\tsh:targetClass schema:GeoCircle;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:geoMidpoint;
\t\tsh:node :ValidSchemaGeoCoordinates;
\t];
\tsh:property [
\t\tsh:path schema:geoRadius;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t\t[sh:node :Distance]
\t\t);
\t].


:ValidSchemaGeoCoordinates a sh:NodeShape;
\tsh:targetClass schema:GeoCoordinates;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:address;
\t\tsh:or (
\t\t\t[sh:node :PostalAddress]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:addressCountry;
\t\tsh:or (
\t\t\t[sh:node :Country]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:elevation;
\t\tsh:or (
\t\t\t[sh:node :Number]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:latitude;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:longitude;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:postalCode;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaGeoShape a sh:NodeShape;
\tsh:targetClass schema:GeoShape;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:address;
\t\tsh:or (
\t\t\t[sh:node :PostalAddress]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:addressCountry;
\t\tsh:or (
\t\t\t[sh:node :Country]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:box;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:circle;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:elevation;
\t\tsh:or (
\t\t\t[sh:node :Number]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:line;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:polygon;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:postalCode;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaGeospatialGeometry a sh:NodeShape;
\tsh:targetClass schema:GeospatialGeometry;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:geoContains;
\t\tsh:or (
\t\t\t[sh:node :GeospatialGeometry]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoCoveredBy;
\t\tsh:or (
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeospatialGeometry]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoCovers;
\t\tsh:or (
\t\t\t[sh:node :GeospatialGeometry]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoCrosses;
\t\tsh:or (
\t\t\t[sh:node :GeospatialGeometry]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoDisjoint;
\t\tsh:or (
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeospatialGeometry]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoEquals;
\t\tsh:or (
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeospatialGeometry]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoIntersects;
\t\tsh:or (
\t\t\t[sh:node :GeospatialGeometry]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoOverlaps;
\t\tsh:or (
\t\t\t[sh:node :GeospatialGeometry]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoTouches;
\t\tsh:or (
\t\t\t[sh:node :GeospatialGeometry]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoWithin;
\t\tsh:or (
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeospatialGeometry]
\t\t);
\t].


:ValidSchemaGiveAction a sh:NodeShape;
\tsh:targetClass schema:GiveAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:recipient;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Audience]
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaGolfCourse a sh:NodeShape;
\tsh:targetClass schema:GolfCourse;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGovernmentBenefitsType a sh:NodeShape;
\tsh:targetClass schema:GovernmentBenefitsType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGovernmentBuilding a sh:NodeShape;
\tsh:targetClass schema:GovernmentBuilding;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGovernmentOffice a sh:NodeShape;
\tsh:targetClass schema:GovernmentOffice;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGovernmentOrganization a sh:NodeShape;
\tsh:targetClass schema:GovernmentOrganization;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGovernmentPermit a sh:NodeShape;
\tsh:targetClass schema:GovernmentPermit;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGovernmentService a sh:NodeShape;
\tsh:targetClass schema:GovernmentService;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:serviceOperator;
\t\tsh:node :ValidSchemaOrganization;
\t].


:ValidSchemaGrant a sh:NodeShape;
\tsh:targetClass schema:Grant;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:sponsor;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaGroceryStore a sh:NodeShape;
\tsh:targetClass schema:GroceryStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaGuide a sh:NodeShape;
\tsh:targetClass schema:Guide;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:reviewAspect;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaHairSalon a sh:NodeShape;
\tsh:targetClass schema:HairSalon;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHardwareStore a sh:NodeShape;
\tsh:targetClass schema:HardwareStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHealthAndBeautyBusiness a sh:NodeShape;
\tsh:targetClass schema:HealthAndBeautyBusiness;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHealthClub a sh:NodeShape;
\tsh:targetClass schema:HealthClub;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHealthInsurancePlan a sh:NodeShape;
\tsh:targetClass schema:HealthInsurancePlan;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:contactPoint;
\t\tsh:node :ValidSchemaContactPoint;
\t].


:ValidSchemaHighSchool a sh:NodeShape;
\tsh:targetClass schema:HighSchool;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHinduTemple a sh:NodeShape;
\tsh:targetClass schema:HinduTemple;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHobbyShop a sh:NodeShape;
\tsh:targetClass schema:HobbyShop;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHomeAndConstructionBusiness a sh:NodeShape;
\tsh:targetClass schema:HomeAndConstructionBusiness;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHomeGoodsStore a sh:NodeShape;
\tsh:targetClass schema:HomeGoodsStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHospital a sh:NodeShape;
\tsh:targetClass schema:Hospital;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHostel a sh:NodeShape;
\tsh:targetClass schema:Hostel;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHotel a sh:NodeShape;
\tsh:targetClass schema:Hotel;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHotelRoom a sh:NodeShape;
\tsh:targetClass schema:HotelRoom;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:bed;
\t\tsh:or (
\t\t\t[sh:node :BedDetails]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :BedType]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:occupancy;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t].


:ValidSchemaHouse a sh:NodeShape;
\tsh:targetClass schema:House;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:numberOfRooms;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t);
\t].


:ValidSchemaHousePainter a sh:NodeShape;
\tsh:targetClass schema:HousePainter;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHowToDirection a sh:NodeShape;
\tsh:targetClass schema:HowToDirection;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:afterMedia;
\t\tsh:or (
\t\t\t[sh:node :MediaObject]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:beforeMedia;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :MediaObject]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:duringMedia;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :MediaObject]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:performTime;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:prepTime;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:supply;
\t\tsh:or (
\t\t\t[sh:node :HowToSupply]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:tool;
\t\tsh:or (
\t\t\t[sh:node :HowToTool]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:totalTime;
\t\tsh:node :ValidSchemaDuration;
\t].


:ValidSchemaHowToItem a sh:NodeShape;
\tsh:targetClass schema:HowToItem;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:requiredQuantity;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t\t[sh:node :Text]
\t\t);
\t].


:ValidSchemaHowToSection a sh:NodeShape;
\tsh:targetClass schema:HowToSection;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:steps;
\t\tsh:or (
\t\t\t[sh:node :CreativeWork]
\t\t\t[sh:node :ItemList]
\t\t\t[sh:node :Text]
\t\t);
\t].


:ValidSchemaHowToStep a sh:NodeShape;
\tsh:targetClass schema:HowToStep;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHowToSupply a sh:NodeShape;
\tsh:targetClass schema:HowToSupply;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:estimatedCost;
\t\tsh:or (
\t\t\t[sh:node :MonetaryAmount]
\t\t\t[sh:node :Text]
\t\t);
\t].


:ValidSchemaHowToTip a sh:NodeShape;
\tsh:targetClass schema:HowToTip;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHowToTool a sh:NodeShape;
\tsh:targetClass schema:HowToTool;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaHVACBusiness a sh:NodeShape;
\tsh:targetClass schema:HVACBusiness;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaIceCreamShop a sh:NodeShape;
\tsh:targetClass schema:IceCreamShop;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaIgnoreAction a sh:NodeShape;
\tsh:targetClass schema:IgnoreAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaImageGallery a sh:NodeShape;
\tsh:targetClass schema:ImageGallery;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaIndividualProduct a sh:NodeShape;
\tsh:targetClass schema:IndividualProduct;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:serialNumber;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaInformAction a sh:NodeShape;
\tsh:targetClass schema:InformAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:event;
\t\tsh:node :ValidSchemaEvent;
\t].


:ValidSchemaInsertAction a sh:NodeShape;
\tsh:targetClass schema:InsertAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:toLocation;
\t\tsh:node :ValidSchemaPlace;
\t].


:ValidSchemaInstallAction a sh:NodeShape;
\tsh:targetClass schema:InstallAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaInsuranceAgency a sh:NodeShape;
\tsh:targetClass schema:InsuranceAgency;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaIntangible a sh:NodeShape;
\tsh:targetClass schema:Intangible;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaInteractAction a sh:NodeShape;
\tsh:targetClass schema:InteractAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaInteractionCounter a sh:NodeShape;
\tsh:targetClass schema:InteractionCounter;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:interactionService;
\t\tsh:or (
\t\t\t[sh:node :WebSite]
\t\t\t[sh:node :SoftwareApplication]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:interactionType;
\t\tsh:node :ValidSchemaAction;
\t];
\tsh:property [
\t\tsh:path schema:userInteractionCount;
\t\tsh:node :ValidSchemaInteger;
\t].


:ValidSchemaInternetCafe a sh:NodeShape;
\tsh:targetClass schema:InternetCafe;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaInvestmentOrDeposit a sh:NodeShape;
\tsh:targetClass schema:InvestmentOrDeposit;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:amount;
\t\tsh:or (
\t\t\t[sh:node :MonetaryAmount]
\t\t\t[sh:node :Number]
\t\t);
\t].


:ValidSchemaInviteAction a sh:NodeShape;
\tsh:targetClass schema:InviteAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:event;
\t\tsh:node :ValidSchemaEvent;
\t].


:ValidSchemaInvoice a sh:NodeShape;
\tsh:targetClass schema:Invoice;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:accountId;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:billingPeriod;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:broker;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:category;
\t\tsh:or (
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :PhysicalActivityCategory]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:confirmationNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:customer;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:minimumPaymentDue;
\t\tsh:or (
\t\t\t[sh:node :PriceSpecification]
\t\t\t[sh:node :MonetaryAmount]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:paymentDue;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:paymentDueDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:paymentMethod;
\t\tsh:node :ValidSchemaPaymentMethod;
\t];
\tsh:property [
\t\tsh:path schema:paymentMethodId;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:paymentStatus;
\t\tsh:or (
\t\t\t[sh:node :PaymentStatusType]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:provider;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:referencesOrder;
\t\tsh:node :ValidSchemaOrder;
\t];
\tsh:property [
\t\tsh:path schema:scheduledPaymentDate;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:totalPaymentDue;
\t\tsh:or (
\t\t\t[sh:node :PriceSpecification]
\t\t\t[sh:node :MonetaryAmount]
\t\t);
\t].


:ValidSchemaItemAvailability a sh:NodeShape;
\tsh:targetClass schema:ItemAvailability;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaItemList a sh:NodeShape;
\tsh:targetClass schema:ItemList;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:itemListElement;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :ListItem]
\t\t\t[sh:node :Thing]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:itemListOrder;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :ItemListOrderType]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numberOfItems;
\t\tsh:node :ValidSchemaInteger;
\t].


:ValidSchemaItemListOrderType a sh:NodeShape;
\tsh:targetClass schema:ItemListOrderType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaItemPage a sh:NodeShape;
\tsh:targetClass schema:ItemPage;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaJewelryStore a sh:NodeShape;
\tsh:targetClass schema:JewelryStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaJobPosting a sh:NodeShape;
\tsh:targetClass schema:JobPosting;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:baseSalary;
\t\tsh:or (
\t\t\t[sh:node :PriceSpecification]
\t\t\t[sh:node :MonetaryAmount]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:benefits;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:datePosted;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Date]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:employmentType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:estimatedSalary;
\t\tsh:or (
\t\t\t[sh:node :Number]
\t\t\t[sh:node :MonetaryAmountDistribution]
\t\t\t[sh:node :MonetaryAmount]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:experienceRequirements;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:hiringOrganization;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:incentiveCompensation;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:incentives;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:industry;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :DefinedTerm]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:jobBenefits;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:jobLocation;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:relevantOccupation;
\t\tsh:node :ValidSchemaOccupation;
\t];
\tsh:property [
\t\tsh:path schema:responsibilities;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:salaryCurrency;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:skills;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :DefinedTerm]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:specialCommitments;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:title;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:validThrough;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:workHours;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaJoinAction a sh:NodeShape;
\tsh:targetClass schema:JoinAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:event;
\t\tsh:node :ValidSchemaEvent;
\t].


:ValidSchemaLakeBodyOfWater a sh:NodeShape;
\tsh:targetClass schema:LakeBodyOfWater;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaLandform a sh:NodeShape;
\tsh:targetClass schema:Landform;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaLandmarksOrHistoricalBuildings a sh:NodeShape;
\tsh:targetClass schema:LandmarksOrHistoricalBuildings;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaLanguage a sh:NodeShape;
\tsh:targetClass schema:Language;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaLeaveAction a sh:NodeShape;
\tsh:targetClass schema:LeaveAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:event;
\t\tsh:node :ValidSchemaEvent;
\t].


:ValidSchemaLegalService a sh:NodeShape;
\tsh:targetClass schema:LegalService;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaLegislativeBuilding a sh:NodeShape;
\tsh:targetClass schema:LegislativeBuilding;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaLendAction a sh:NodeShape;
\tsh:targetClass schema:LendAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:borrower;
\t\tsh:node :ValidSchemaPerson;
\t].


:ValidSchemaLibrary a sh:NodeShape;
\tsh:targetClass schema:Library;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaLikeAction a sh:NodeShape;
\tsh:targetClass schema:LikeAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaLinkRole a sh:NodeShape;
\tsh:targetClass schema:LinkRole;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:inLanguage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Language]
\t\t);
\t].


:ValidSchemaLiquorStore a sh:NodeShape;
\tsh:targetClass schema:LiquorStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaListenAction a sh:NodeShape;
\tsh:targetClass schema:ListenAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaListItem a sh:NodeShape;
\tsh:targetClass schema:ListItem;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:item;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:nextItem;
\t\tsh:node :ValidSchemaListItem;
\t];
\tsh:property [
\t\tsh:path schema:position;
\t\tsh:or (
\t\t\t[sh:node :Integer]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:previousItem;
\t\tsh:node :ValidSchemaListItem;
\t].


:ValidSchemaLiteraryEvent a sh:NodeShape;
\tsh:targetClass schema:LiteraryEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaLiveBlogPosting a sh:NodeShape;
\tsh:targetClass schema:LiveBlogPosting;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:coverageEndTime;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:coverageStartTime;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:liveBlogUpdate;
\t\tsh:node :ValidSchemaBlogPosting;
\t].


:ValidSchemaLoanOrCredit a sh:NodeShape;
\tsh:targetClass schema:LoanOrCredit;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:amount;
\t\tsh:or (
\t\t\t[sh:node :MonetaryAmount]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:currency;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:loanTerm;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:requiredCollateral;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Thing]
\t\t);
\t].


:ValidSchemaLocalBusiness a sh:NodeShape;
\tsh:targetClass schema:LocalBusiness;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:branchOf;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:currenciesAccepted;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:openingHours;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:paymentAccepted;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:priceRange;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaLocationFeatureSpecification a sh:NodeShape;
\tsh:targetClass schema:LocationFeatureSpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:hoursAvailable;
\t\tsh:node :ValidSchemaOpeningHoursSpecification;
\t];
\tsh:property [
\t\tsh:path schema:validFrom;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:validThrough;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t].


:ValidSchemaLockerDelivery a sh:NodeShape;
\tsh:targetClass schema:LockerDelivery;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaLocksmith a sh:NodeShape;
\tsh:targetClass schema:Locksmith;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaLodgingBusiness a sh:NodeShape;
\tsh:targetClass schema:LodgingBusiness;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:amenityFeature;
\t\tsh:node :ValidSchemaLocationFeatureSpecification;
\t];
\tsh:property [
\t\tsh:path schema:audience;
\t\tsh:node :ValidSchemaAudience;
\t];
\tsh:property [
\t\tsh:path schema:availableLanguage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Language]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:checkinTime;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Time]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:checkoutTime;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Time]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numberOfRooms;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:petsAllowed;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Boolean]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:starRating;
\t\tsh:node :ValidSchemaRating;
\t].


:ValidSchemaLodgingReservation a sh:NodeShape;
\tsh:targetClass schema:LodgingReservation;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:checkinTime;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Time]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:checkoutTime;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Time]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:lodgingUnitDescription;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:lodgingUnitType;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :QualitativeValue]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numAdults;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Integer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numChildren;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Integer]
\t\t);
\t].


:ValidSchemaLoseAction a sh:NodeShape;
\tsh:targetClass schema:LoseAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:winner;
\t\tsh:node :ValidSchemaPerson;
\t].


:ValidSchemaMap a sh:NodeShape;
\tsh:targetClass schema:Map;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:mapType;
\t\tsh:node :ValidSchemaMapCategoryType;
\t].


:ValidSchemaMapCategoryType a sh:NodeShape;
\tsh:targetClass schema:MapCategoryType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMarryAction a sh:NodeShape;
\tsh:targetClass schema:MarryAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMass a sh:NodeShape;
\tsh:targetClass schema:Mass;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMediaGallery a sh:NodeShape;
\tsh:targetClass schema:MediaGallery;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMediaObject a sh:NodeShape;
\tsh:targetClass schema:MediaObject;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:associatedArticle;
\t\tsh:node :ValidSchemaNewsArticle;
\t];
\tsh:property [
\t\tsh:path schema:bitrate;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:contentSize;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:contentUrl;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:duration;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:embedUrl;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:encodesCreativeWork;
\t\tsh:node :ValidSchemaCreativeWork;
\t];
\tsh:property [
\t\tsh:path schema:encodingFormat;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:endTime;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Time]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:height;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Distance]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:playerType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:productionCompany;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:regionsAllowed;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:requiresSubscription;
\t\tsh:or (
\t\t\t[sh:node :MediaSubscription]
\t\t\t[sh:node :Boolean]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:startTime;
\t\tsh:or (
\t\t\t[sh:node :Time]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:uploadDate;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:width;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Distance]
\t\t);
\t].


:ValidSchemaMediaSubscription a sh:NodeShape;
\tsh:targetClass schema:MediaSubscription;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:authenticator;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:expectsAcceptanceOf;
\t\tsh:node :ValidSchemaOffer;
\t].


:ValidSchemaMedicalBusiness a sh:NodeShape;
\tsh:targetClass schema:MedicalBusiness;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMedicalOrganization a sh:NodeShape;
\tsh:targetClass schema:MedicalOrganization;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMedicalStudy a sh:NodeShape;
\tsh:targetClass schema:MedicalStudy;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:sponsor;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaMeetingRoom a sh:NodeShape;
\tsh:targetClass schema:MeetingRoom;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMensClothingStore a sh:NodeShape;
\tsh:targetClass schema:MensClothingStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMenu a sh:NodeShape;
\tsh:targetClass schema:Menu;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:hasMenuItem;
\t\tsh:node :ValidSchemaMenuItem;
\t];
\tsh:property [
\t\tsh:path schema:hasMenuSection;
\t\tsh:node :ValidSchemaMenuSection;
\t].


:ValidSchemaMenuItem a sh:NodeShape;
\tsh:targetClass schema:MenuItem;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:menuAddOn;
\t\tsh:or (
\t\t\t[sh:node :MenuItem]
\t\t\t[sh:node :MenuSection]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:nutrition;
\t\tsh:node :ValidSchemaNutritionInformation;
\t];
\tsh:property [
\t\tsh:path schema:offers;
\t\tsh:or (
\t\t\t[sh:node :Demand]
\t\t\t[sh:node :Offer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:suitableForDiet;
\t\tsh:node :ValidSchemaRestrictedDiet;
\t].


:ValidSchemaMenuSection a sh:NodeShape;
\tsh:targetClass schema:MenuSection;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:hasMenuItem;
\t\tsh:node :ValidSchemaMenuItem;
\t];
\tsh:property [
\t\tsh:path schema:hasMenuSection;
\t\tsh:node :ValidSchemaMenuSection;
\t].


:ValidSchemaMessage a sh:NodeShape;
\tsh:targetClass schema:Message;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:bccRecipient;
\t\tsh:or (
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:ccRecipient;
\t\tsh:or (
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:dateRead;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:dateReceived;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:dateSent;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:messageAttachment;
\t\tsh:node :ValidSchemaCreativeWork;
\t];
\tsh:property [
\t\tsh:path schema:recipient;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Audience]
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:sender;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Audience]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:toRecipient;
\t\tsh:or (
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Audience]
\t\t);
\t].


:ValidSchemaMiddleSchool a sh:NodeShape;
\tsh:targetClass schema:MiddleSchool;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMobileApplication a sh:NodeShape;
\tsh:targetClass schema:MobileApplication;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:carrierRequirements;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaMobilePhoneStore a sh:NodeShape;
\tsh:targetClass schema:MobilePhoneStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMonetaryAmount a sh:NodeShape;
\tsh:targetClass schema:MonetaryAmount;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:currency;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:maxValue;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:minValue;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:validFrom;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:validThrough;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:value;
\t\tsh:or (
\t\t\t[sh:node :Boolean]
\t\t\t[sh:node :StructuredValue]
\t\t\t[sh:node :Number]
\t\t\t[sh:node :Text]
\t\t);
\t].


:ValidSchemaMonetaryAmountDistribution a sh:NodeShape;
\tsh:targetClass schema:MonetaryAmountDistribution;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:currency;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaMonetaryGrant a sh:NodeShape;
\tsh:targetClass schema:MonetaryGrant;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:amount;
\t\tsh:or (
\t\t\t[sh:node :MonetaryAmount]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:funder;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaMoneyTransfer a sh:NodeShape;
\tsh:targetClass schema:MoneyTransfer;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:amount;
\t\tsh:or (
\t\t\t[sh:node :MonetaryAmount]
\t\t\t[sh:node :Number]
\t\t);
\t].


:ValidSchemaMosque a sh:NodeShape;
\tsh:targetClass schema:Mosque;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMotel a sh:NodeShape;
\tsh:targetClass schema:Motel;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMotorcycleDealer a sh:NodeShape;
\tsh:targetClass schema:MotorcycleDealer;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMotorcycleRepair a sh:NodeShape;
\tsh:targetClass schema:MotorcycleRepair;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMountain a sh:NodeShape;
\tsh:targetClass schema:Mountain;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMoveAction a sh:NodeShape;
\tsh:targetClass schema:MoveAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:fromLocation;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:toLocation;
\t\tsh:node :ValidSchemaPlace;
\t].


:ValidSchemaMovie a sh:NodeShape;
\tsh:targetClass schema:Movie;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actor;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:actors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:countryOfOrigin;
\t\tsh:node :ValidSchemaCountry;
\t];
\tsh:property [
\t\tsh:path schema:director;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:directors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:duration;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:musicBy;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :MusicGroup]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:productionCompany;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:trailer;
\t\tsh:node :ValidSchemaVideoObject;
\t].


:ValidSchemaMovieClip a sh:NodeShape;
\tsh:targetClass schema:MovieClip;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMovieRentalStore a sh:NodeShape;
\tsh:targetClass schema:MovieRentalStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMovieSeries a sh:NodeShape;
\tsh:targetClass schema:MovieSeries;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actor;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:actors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:director;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:directors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:musicBy;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :MusicGroup]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:productionCompany;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:trailer;
\t\tsh:node :ValidSchemaVideoObject;
\t].


:ValidSchemaMovieTheater a sh:NodeShape;
\tsh:targetClass schema:MovieTheater;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:screenCount;
\t\tsh:node :ValidSchemaNumber;
\t].


:ValidSchemaMovingCompany a sh:NodeShape;
\tsh:targetClass schema:MovingCompany;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMuseum a sh:NodeShape;
\tsh:targetClass schema:Museum;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMusicAlbum a sh:NodeShape;
\tsh:targetClass schema:MusicAlbum;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:albumProductionType;
\t\tsh:node :ValidSchemaMusicAlbumProductionType;
\t];
\tsh:property [
\t\tsh:path schema:albumRelease;
\t\tsh:node :ValidSchemaMusicRelease;
\t];
\tsh:property [
\t\tsh:path schema:albumReleaseType;
\t\tsh:node :ValidSchemaMusicAlbumReleaseType;
\t];
\tsh:property [
\t\tsh:path schema:byArtist;
\t\tsh:or (
\t\t\t[sh:node :MusicGroup]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaMusicAlbumProductionType a sh:NodeShape;
\tsh:targetClass schema:MusicAlbumProductionType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMusicAlbumReleaseType a sh:NodeShape;
\tsh:targetClass schema:MusicAlbumReleaseType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMusicComposition a sh:NodeShape;
\tsh:targetClass schema:MusicComposition;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:composer;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:firstPerformance;
\t\tsh:node :ValidSchemaEvent;
\t];
\tsh:property [
\t\tsh:path schema:includedComposition;
\t\tsh:node :ValidSchemaMusicComposition;
\t];
\tsh:property [
\t\tsh:path schema:iswcCode;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:lyricist;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:lyrics;
\t\tsh:node :ValidSchemaCreativeWork;
\t];
\tsh:property [
\t\tsh:path schema:musicArrangement;
\t\tsh:node :ValidSchemaMusicComposition;
\t];
\tsh:property [
\t\tsh:path schema:musicCompositionForm;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:musicalKey;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:recordedAs;
\t\tsh:node :ValidSchemaMusicRecording;
\t].


:ValidSchemaMusicEvent a sh:NodeShape;
\tsh:targetClass schema:MusicEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMusicGroup a sh:NodeShape;
\tsh:targetClass schema:MusicGroup;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:album;
\t\tsh:node :ValidSchemaMusicAlbum;
\t];
\tsh:property [
\t\tsh:path schema:albums;
\t\tsh:node :ValidSchemaMusicAlbum;
\t];
\tsh:property [
\t\tsh:path schema:genre;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:musicGroupMember;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:track;
\t\tsh:or (
\t\t\t[sh:node :MusicRecording]
\t\t\t[sh:node :ItemList]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:tracks;
\t\tsh:node :ValidSchemaMusicRecording;
\t].


:ValidSchemaMusicPlaylist a sh:NodeShape;
\tsh:targetClass schema:MusicPlaylist;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:numTracks;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:track;
\t\tsh:or (
\t\t\t[sh:node :MusicRecording]
\t\t\t[sh:node :ItemList]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:tracks;
\t\tsh:node :ValidSchemaMusicRecording;
\t].


:ValidSchemaMusicRecording a sh:NodeShape;
\tsh:targetClass schema:MusicRecording;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:byArtist;
\t\tsh:or (
\t\t\t[sh:node :MusicGroup]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:duration;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:inAlbum;
\t\tsh:node :ValidSchemaMusicAlbum;
\t];
\tsh:property [
\t\tsh:path schema:inPlaylist;
\t\tsh:node :ValidSchemaMusicPlaylist;
\t];
\tsh:property [
\t\tsh:path schema:isrcCode;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:recordingOf;
\t\tsh:node :ValidSchemaMusicComposition;
\t].


:ValidSchemaMusicRelease a sh:NodeShape;
\tsh:targetClass schema:MusicRelease;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:catalogNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:creditedTo;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:duration;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:musicReleaseFormat;
\t\tsh:node :ValidSchemaMusicReleaseFormatType;
\t];
\tsh:property [
\t\tsh:path schema:recordLabel;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:releaseOf;
\t\tsh:node :ValidSchemaMusicAlbum;
\t].


:ValidSchemaMusicReleaseFormatType a sh:NodeShape;
\tsh:targetClass schema:MusicReleaseFormatType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMusicStore a sh:NodeShape;
\tsh:targetClass schema:MusicStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMusicVenue a sh:NodeShape;
\tsh:targetClass schema:MusicVenue;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaMusicVideoObject a sh:NodeShape;
\tsh:targetClass schema:MusicVideoObject;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaNailSalon a sh:NodeShape;
\tsh:targetClass schema:NailSalon;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaNewsArticle a sh:NodeShape;
\tsh:targetClass schema:NewsArticle;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:dateline;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:printColumn;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:printEdition;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:printPage;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:printSection;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaNGO a sh:NodeShape;
\tsh:targetClass schema:NGO;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaNightClub a sh:NodeShape;
\tsh:targetClass schema:NightClub;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaNotary a sh:NodeShape;
\tsh:targetClass schema:Notary;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaNoteDigitalDocument a sh:NodeShape;
\tsh:targetClass schema:NoteDigitalDocument;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaOccupation a sh:NodeShape;
\tsh:targetClass schema:Occupation;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:estimatedSalary;
\t\tsh:or (
\t\t\t[sh:node :Number]
\t\t\t[sh:node :MonetaryAmountDistribution]
\t\t\t[sh:node :MonetaryAmount]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:experienceRequirements;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:occupationLocation;
\t\tsh:node :ValidSchemaAdministrativeArea;
\t];
\tsh:property [
\t\tsh:path schema:responsibilities;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:skills;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :DefinedTerm]
\t\t);
\t].


:ValidSchemaOceanBodyOfWater a sh:NodeShape;
\tsh:targetClass schema:OceanBodyOfWater;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaOffer a sh:NodeShape;
\tsh:targetClass schema:Offer;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:acceptedPaymentMethod;
\t\tsh:or (
\t\t\t[sh:node :LoanOrCredit]
\t\t\t[sh:node :PaymentMethod]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:addOn;
\t\tsh:node :ValidSchemaOffer;
\t];
\tsh:property [
\t\tsh:path schema:advanceBookingRequirement;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:aggregateRating;
\t\tsh:node :ValidSchemaAggregateRating;
\t];
\tsh:property [
\t\tsh:path schema:areaServed;
\t\tsh:or (
\t\t\t[sh:node :AdministrativeArea]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:availability;
\t\tsh:node :ValidSchemaItemAvailability;
\t];
\tsh:property [
\t\tsh:path schema:availabilityEnds;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Time]
\t\t\t[sh:node :Date]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:availabilityStarts;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :Time]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:availableAtOrFrom;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:availableDeliveryMethod;
\t\tsh:node :ValidSchemaDeliveryMethod;
\t];
\tsh:property [
\t\tsh:path schema:businessFunction;
\t\tsh:node :ValidSchemaBusinessFunction;
\t];
\tsh:property [
\t\tsh:path schema:category;
\t\tsh:or (
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :PhysicalActivityCategory]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:deliveryLeadTime;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:eligibleCustomerType;
\t\tsh:node :ValidSchemaBusinessEntityType;
\t];
\tsh:property [
\t\tsh:path schema:eligibleDuration;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:eligibleQuantity;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:eligibleRegion;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:eligibleTransactionVolume;
\t\tsh:node :ValidSchemaPriceSpecification;
\t];
\tsh:property [
\t\tsh:path schema:gtin12;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:gtin13;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:gtin14;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:gtin8;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:includesObject;
\t\tsh:node :ValidSchemaTypeAndQuantityNode;
\t];
\tsh:property [
\t\tsh:path schema:inventoryLevel;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:itemCondition;
\t\tsh:node :ValidSchemaOfferItemCondition;
\t];
\tsh:property [
\t\tsh:path schema:itemOffered;
\t\tsh:or (
\t\t\t[sh:node :AggregateOffer]
\t\t\t[sh:node :Product]
\t\t\t[sh:node :CreativeWork]
\t\t\t[sh:node :Service]
\t\t\t[sh:node :MenuItem]
\t\t\t[sh:node :Trip]
\t\t\t[sh:node :Event]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:mpn;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:offeredBy;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:price;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:priceCurrency;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:priceSpecification;
\t\tsh:node :ValidSchemaPriceSpecification;
\t];
\tsh:property [
\t\tsh:path schema:priceValidUntil;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:review;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:reviews;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:seller;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:serialNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:sku;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:validFrom;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:validThrough;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:warranty;
\t\tsh:node :ValidSchemaWarrantyPromise;
\t].


:ValidSchemaOfferCatalog a sh:NodeShape;
\tsh:targetClass schema:OfferCatalog;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaOfferItemCondition a sh:NodeShape;
\tsh:targetClass schema:OfferItemCondition;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaOfficeEquipmentStore a sh:NodeShape;
\tsh:targetClass schema:OfficeEquipmentStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaOnDemandEvent a sh:NodeShape;
\tsh:targetClass schema:OnDemandEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaOpeningHoursSpecification a sh:NodeShape;
\tsh:targetClass schema:OpeningHoursSpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:closes;
\t\tsh:node :ValidSchemaTime;
\t];
\tsh:property [
\t\tsh:path schema:dayOfWeek;
\t\tsh:node :ValidSchemaDayOfWeek;
\t];
\tsh:property [
\t\tsh:path schema:opens;
\t\tsh:node :ValidSchemaTime;
\t];
\tsh:property [
\t\tsh:path schema:validFrom;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:validThrough;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t].


:ValidSchemaOrder a sh:NodeShape;
\tsh:targetClass schema:Order;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:acceptedOffer;
\t\tsh:node :ValidSchemaOffer;
\t];
\tsh:property [
\t\tsh:path schema:billingAddress;
\t\tsh:node :ValidSchemaPostalAddress;
\t];
\tsh:property [
\t\tsh:path schema:broker;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:confirmationNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:customer;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:discount;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:discountCode;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:discountCurrency;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:isGift;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:merchant;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:orderDate;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Date]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:orderDelivery;
\t\tsh:node :ValidSchemaParcelDelivery;
\t];
\tsh:property [
\t\tsh:path schema:orderNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:orderStatus;
\t\tsh:node :ValidSchemaOrderStatus;
\t];
\tsh:property [
\t\tsh:path schema:orderedItem;
\t\tsh:or (
\t\t\t[sh:node :OrderItem]
\t\t\t[sh:node :Product]
\t\t\t[sh:node :Service]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:partOfInvoice;
\t\tsh:node :ValidSchemaInvoice;
\t];
\tsh:property [
\t\tsh:path schema:paymentDue;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:paymentDueDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:paymentMethod;
\t\tsh:node :ValidSchemaPaymentMethod;
\t];
\tsh:property [
\t\tsh:path schema:paymentMethodId;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:paymentUrl;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:seller;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaOrderAction a sh:NodeShape;
\tsh:targetClass schema:OrderAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:deliveryMethod;
\t\tsh:node :ValidSchemaDeliveryMethod;
\t].


:ValidSchemaOrderItem a sh:NodeShape;
\tsh:targetClass schema:OrderItem;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:orderDelivery;
\t\tsh:node :ValidSchemaParcelDelivery;
\t];
\tsh:property [
\t\tsh:path schema:orderItemNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:orderItemStatus;
\t\tsh:node :ValidSchemaOrderStatus;
\t];
\tsh:property [
\t\tsh:path schema:orderQuantity;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:orderedItem;
\t\tsh:or (
\t\t\t[sh:node :OrderItem]
\t\t\t[sh:node :Product]
\t\t\t[sh:node :Service]
\t\t);
\t].


:ValidSchemaOrderStatus a sh:NodeShape;
\tsh:targetClass schema:OrderStatus;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaOrganization a sh:NodeShape;
\tsh:targetClass schema:Organization;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:address;
\t\tsh:or (
\t\t\t[sh:node :PostalAddress]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:aggregateRating;
\t\tsh:node :ValidSchemaAggregateRating;
\t];
\tsh:property [
\t\tsh:path schema:alumni;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:areaServed;
\t\tsh:or (
\t\t\t[sh:node :AdministrativeArea]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:award;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:awards;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:brand;
\t\tsh:or (
\t\t\t[sh:node :Brand]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:contactPoint;
\t\tsh:node :ValidSchemaContactPoint;
\t];
\tsh:property [
\t\tsh:path schema:contactPoints;
\t\tsh:node :ValidSchemaContactPoint;
\t];
\tsh:property [
\t\tsh:path schema:department;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:dissolutionDate;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:duns;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:email;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:employee;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:employees;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:event;
\t\tsh:node :ValidSchemaEvent;
\t];
\tsh:property [
\t\tsh:path schema:events;
\t\tsh:node :ValidSchemaEvent;
\t];
\tsh:property [
\t\tsh:path schema:faxNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:founder;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:founders;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:foundingDate;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:foundingLocation;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:funder;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:globalLocationNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:hasOfferCatalog;
\t\tsh:node :ValidSchemaOfferCatalog;
\t];
\tsh:property [
\t\tsh:path schema:hasPOS;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:interactionStatistic;
\t\tsh:node :ValidSchemaInteractionCounter;
\t];
\tsh:property [
\t\tsh:path schema:isicV4;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:legalName;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:leiCode;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:location;
\t\tsh:or (
\t\t\t[sh:node :VirtualLocation]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :PostalAddress]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:logo;
\t\tsh:or (
\t\t\t[sh:node :ImageObject]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:makesOffer;
\t\tsh:node :ValidSchemaOffer;
\t];
\tsh:property [
\t\tsh:path schema:member;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:memberOf;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :ProgramMembership]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:members;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:naics;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:numberOfEmployees;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:owns;
\t\tsh:or (
\t\t\t[sh:node :OwnershipInfo]
\t\t\t[sh:node :Product]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:parentOrganization;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:publishingPrinciples;
\t\tsh:or (
\t\t\t[sh:node :CreativeWork]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:review;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:reviews;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:seeks;
\t\tsh:node :ValidSchemaDemand;
\t];
\tsh:property [
\t\tsh:path schema:serviceArea;
\t\tsh:or (
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t\t[sh:node :AdministrativeArea]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:slogan;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:sponsor;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:subOrganization;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:taxID;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:telephone;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:vatID;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaOrganizationRole a sh:NodeShape;
\tsh:targetClass schema:OrganizationRole;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:numberedPosition;
\t\tsh:node :ValidSchemaNumber;
\t].


:ValidSchemaOrganizeAction a sh:NodeShape;
\tsh:targetClass schema:OrganizeAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaOutletStore a sh:NodeShape;
\tsh:targetClass schema:OutletStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaOwnershipInfo a sh:NodeShape;
\tsh:targetClass schema:OwnershipInfo;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:acquiredFrom;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:ownedFrom;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:ownedThrough;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:typeOfGood;
\t\tsh:or (
\t\t\t[sh:node :Service]
\t\t\t[sh:node :Product]
\t\t);
\t].


:ValidSchemaPaintAction a sh:NodeShape;
\tsh:targetClass schema:PaintAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPainting a sh:NodeShape;
\tsh:targetClass schema:Painting;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaParcelDelivery a sh:NodeShape;
\tsh:targetClass schema:ParcelDelivery;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:carrier;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:deliveryAddress;
\t\tsh:node :ValidSchemaPostalAddress;
\t];
\tsh:property [
\t\tsh:path schema:deliveryStatus;
\t\tsh:node :ValidSchemaDeliveryEvent;
\t];
\tsh:property [
\t\tsh:path schema:expectedArrivalFrom;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Date]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:expectedArrivalUntil;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Date]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:hasDeliveryMethod;
\t\tsh:node :ValidSchemaDeliveryMethod;
\t];
\tsh:property [
\t\tsh:path schema:itemShipped;
\t\tsh:node :ValidSchemaProduct;
\t];
\tsh:property [
\t\tsh:path schema:originAddress;
\t\tsh:node :ValidSchemaPostalAddress;
\t];
\tsh:property [
\t\tsh:path schema:partOfOrder;
\t\tsh:node :ValidSchemaOrder;
\t];
\tsh:property [
\t\tsh:path schema:provider;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:trackingNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:trackingUrl;
\t\tsh:node :ValidSchemaURL;
\t].


:ValidSchemaParcelService a sh:NodeShape;
\tsh:targetClass schema:ParcelService;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaParentAudience a sh:NodeShape;
\tsh:targetClass schema:ParentAudience;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:childMaxAge;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:childMinAge;
\t\tsh:node :ValidSchemaNumber;
\t].


:ValidSchemaPark a sh:NodeShape;
\tsh:targetClass schema:Park;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaParkingFacility a sh:NodeShape;
\tsh:targetClass schema:ParkingFacility;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPawnShop a sh:NodeShape;
\tsh:targetClass schema:PawnShop;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPayAction a sh:NodeShape;
\tsh:targetClass schema:PayAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:recipient;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Audience]
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaPaymentCard a sh:NodeShape;
\tsh:targetClass schema:PaymentCard;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPaymentChargeSpecification a sh:NodeShape;
\tsh:targetClass schema:PaymentChargeSpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:appliesToDeliveryMethod;
\t\tsh:node :ValidSchemaDeliveryMethod;
\t];
\tsh:property [
\t\tsh:path schema:appliesToPaymentMethod;
\t\tsh:node :ValidSchemaPaymentMethod;
\t].


:ValidSchemaPaymentMethod a sh:NodeShape;
\tsh:targetClass schema:PaymentMethod;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPaymentService a sh:NodeShape;
\tsh:targetClass schema:PaymentService;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPaymentStatusType a sh:NodeShape;
\tsh:targetClass schema:PaymentStatusType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPeopleAudience a sh:NodeShape;
\tsh:targetClass schema:PeopleAudience;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:requiredGender;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:requiredMaxAge;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:requiredMinAge;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:suggestedGender;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:suggestedMaxAge;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:suggestedMinAge;
\t\tsh:node :ValidSchemaNumber;
\t].


:ValidSchemaPerformAction a sh:NodeShape;
\tsh:targetClass schema:PerformAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:entertainmentBusiness;
\t\tsh:node :ValidSchemaEntertainmentBusiness;
\t].


:ValidSchemaPerformanceRole a sh:NodeShape;
\tsh:targetClass schema:PerformanceRole;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:characterName;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaPerformingArtsTheater a sh:NodeShape;
\tsh:targetClass schema:PerformingArtsTheater;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPerformingGroup a sh:NodeShape;
\tsh:targetClass schema:PerformingGroup;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPeriodical a sh:NodeShape;
\tsh:targetClass schema:Periodical;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPermit a sh:NodeShape;
\tsh:targetClass schema:Permit;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:issuedBy;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:issuedThrough;
\t\tsh:node :ValidSchemaService;
\t];
\tsh:property [
\t\tsh:path schema:permitAudience;
\t\tsh:node :ValidSchemaAudience;
\t];
\tsh:property [
\t\tsh:path schema:validFor;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:validFrom;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:validIn;
\t\tsh:node :ValidSchemaAdministrativeArea;
\t];
\tsh:property [
\t\tsh:path schema:validUntil;
\t\tsh:node :ValidSchemaDate;
\t].


:ValidSchemaPetStore a sh:NodeShape;
\tsh:targetClass schema:PetStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPharmacy a sh:NodeShape;
\tsh:targetClass schema:Pharmacy;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPhotograph a sh:NodeShape;
\tsh:targetClass schema:Photograph;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPhotographAction a sh:NodeShape;
\tsh:targetClass schema:PhotographAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPhysicalActivity a sh:NodeShape;
\tsh:targetClass schema:PhysicalActivity;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:category;
\t\tsh:or (
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :PhysicalActivityCategory]
\t\t\t[sh:node :Text]
\t\t);
\t].


:ValidSchemaPhysicalActivityCategory a sh:NodeShape;
\tsh:targetClass schema:PhysicalActivityCategory;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPhysician a sh:NodeShape;
\tsh:targetClass schema:Physician;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPlace a sh:NodeShape;
\tsh:targetClass schema:Place;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:additionalProperty;
\t\tsh:node :ValidSchemaPropertyValue;
\t];
\tsh:property [
\t\tsh:path schema:address;
\t\tsh:or (
\t\t\t[sh:node :PostalAddress]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:aggregateRating;
\t\tsh:node :ValidSchemaAggregateRating;
\t];
\tsh:property [
\t\tsh:path schema:amenityFeature;
\t\tsh:node :ValidSchemaLocationFeatureSpecification;
\t];
\tsh:property [
\t\tsh:path schema:branchCode;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:containedIn;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:containedInPlace;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:containsPlace;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:event;
\t\tsh:node :ValidSchemaEvent;
\t];
\tsh:property [
\t\tsh:path schema:events;
\t\tsh:node :ValidSchemaEvent;
\t];
\tsh:property [
\t\tsh:path schema:faxNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:geo;
\t\tsh:or (
\t\t\t[sh:node :GeoShape]
\t\t\t[sh:node :GeoCoordinates]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoContains;
\t\tsh:or (
\t\t\t[sh:node :GeospatialGeometry]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoCoveredBy;
\t\tsh:or (
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeospatialGeometry]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoCovers;
\t\tsh:or (
\t\t\t[sh:node :GeospatialGeometry]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoCrosses;
\t\tsh:or (
\t\t\t[sh:node :GeospatialGeometry]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoDisjoint;
\t\tsh:or (
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeospatialGeometry]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoEquals;
\t\tsh:or (
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeospatialGeometry]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoIntersects;
\t\tsh:or (
\t\t\t[sh:node :GeospatialGeometry]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoOverlaps;
\t\tsh:or (
\t\t\t[sh:node :GeospatialGeometry]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoTouches;
\t\tsh:or (
\t\t\t[sh:node :GeospatialGeometry]
\t\t\t[sh:node :Place]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:geoWithin;
\t\tsh:or (
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeospatialGeometry]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:globalLocationNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:hasMap;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Map]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:isAccessibleForFree;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:isicV4;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:latitude;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:logo;
\t\tsh:or (
\t\t\t[sh:node :ImageObject]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:longitude;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:map;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:maps;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:maximumAttendeeCapacity;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:openingHoursSpecification;
\t\tsh:node :ValidSchemaOpeningHoursSpecification;
\t];
\tsh:property [
\t\tsh:path schema:photo;
\t\tsh:or (
\t\t\t[sh:node :ImageObject]
\t\t\t[sh:node :Photograph]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:photos;
\t\tsh:or (
\t\t\t[sh:node :ImageObject]
\t\t\t[sh:node :Photograph]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:publicAccess;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:review;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:reviews;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:slogan;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:smokingAllowed;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:specialOpeningHoursSpecification;
\t\tsh:node :ValidSchemaOpeningHoursSpecification;
\t];
\tsh:property [
\t\tsh:path schema:telephone;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaPlaceOfWorship a sh:NodeShape;
\tsh:targetClass schema:PlaceOfWorship;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPlanAction a sh:NodeShape;
\tsh:targetClass schema:PlanAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:scheduledTime;
\t\tsh:node :ValidSchemaDateTime;
\t].


:ValidSchemaPlayAction a sh:NodeShape;
\tsh:targetClass schema:PlayAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:audience;
\t\tsh:node :ValidSchemaAudience;
\t];
\tsh:property [
\t\tsh:path schema:event;
\t\tsh:node :ValidSchemaEvent;
\t].


:ValidSchemaPlayground a sh:NodeShape;
\tsh:targetClass schema:Playground;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPlumber a sh:NodeShape;
\tsh:targetClass schema:Plumber;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPoliceStation a sh:NodeShape;
\tsh:targetClass schema:PoliceStation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPond a sh:NodeShape;
\tsh:targetClass schema:Pond;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPostalAddress a sh:NodeShape;
\tsh:targetClass schema:PostalAddress;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:addressCountry;
\t\tsh:or (
\t\t\t[sh:node :Country]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:addressLocality;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:addressRegion;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:postOfficeBoxNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:postalCode;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:streetAddress;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaPostOffice a sh:NodeShape;
\tsh:targetClass schema:PostOffice;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPreOrderAction a sh:NodeShape;
\tsh:targetClass schema:PreOrderAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPrependAction a sh:NodeShape;
\tsh:targetClass schema:PrependAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPreschool a sh:NodeShape;
\tsh:targetClass schema:Preschool;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPresentationDigitalDocument a sh:NodeShape;
\tsh:targetClass schema:PresentationDigitalDocument;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaPriceSpecification a sh:NodeShape;
\tsh:targetClass schema:PriceSpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:eligibleQuantity;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:eligibleTransactionVolume;
\t\tsh:node :ValidSchemaPriceSpecification;
\t];
\tsh:property [
\t\tsh:path schema:maxPrice;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:minPrice;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:price;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:priceCurrency;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:validFrom;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:validThrough;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:valueAddedTaxIncluded;
\t\tsh:node :ValidSchemaBoolean;
\t].


:ValidSchemaProduct a sh:NodeShape;
\tsh:targetClass schema:Product;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:additionalProperty;
\t\tsh:node :ValidSchemaPropertyValue;
\t];
\tsh:property [
\t\tsh:path schema:aggregateRating;
\t\tsh:node :ValidSchemaAggregateRating;
\t];
\tsh:property [
\t\tsh:path schema:audience;
\t\tsh:node :ValidSchemaAudience;
\t];
\tsh:property [
\t\tsh:path schema:award;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:awards;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:brand;
\t\tsh:or (
\t\t\t[sh:node :Brand]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:category;
\t\tsh:or (
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :PhysicalActivityCategory]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:color;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:depth;
\t\tsh:or (
\t\t\t[sh:node :Distance]
\t\t\t[sh:node :QuantitativeValue]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:gtin12;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:gtin13;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:gtin14;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:gtin8;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:height;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Distance]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:isAccessoryOrSparePartFor;
\t\tsh:node :ValidSchemaProduct;
\t];
\tsh:property [
\t\tsh:path schema:isConsumableFor;
\t\tsh:node :ValidSchemaProduct;
\t];
\tsh:property [
\t\tsh:path schema:isRelatedTo;
\t\tsh:or (
\t\t\t[sh:node :Product]
\t\t\t[sh:node :Service]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:isSimilarTo;
\t\tsh:or (
\t\t\t[sh:node :Service]
\t\t\t[sh:node :Product]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:itemCondition;
\t\tsh:node :ValidSchemaOfferItemCondition;
\t];
\tsh:property [
\t\tsh:path schema:logo;
\t\tsh:or (
\t\t\t[sh:node :ImageObject]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:manufacturer;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:material;
\t\tsh:or (
\t\t\t[sh:node :Product]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:model;
\t\tsh:or (
\t\t\t[sh:node :ProductModel]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:mpn;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:offers;
\t\tsh:or (
\t\t\t[sh:node :Demand]
\t\t\t[sh:node :Offer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:productID;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:productionDate;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:purchaseDate;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:releaseDate;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:review;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:reviews;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:sku;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:slogan;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:weight;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:width;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Distance]
\t\t);
\t].


:ValidSchemaProductModel a sh:NodeShape;
\tsh:targetClass schema:ProductModel;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:isVariantOf;
\t\tsh:node :ValidSchemaProductModel;
\t];
\tsh:property [
\t\tsh:path schema:predecessorOf;
\t\tsh:node :ValidSchemaProductModel;
\t];
\tsh:property [
\t\tsh:path schema:successorOf;
\t\tsh:node :ValidSchemaProductModel;
\t].


:ValidSchemaProfessionalService a sh:NodeShape;
\tsh:targetClass schema:ProfessionalService;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaProfilePage a sh:NodeShape;
\tsh:targetClass schema:ProfilePage;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaProgramMembership a sh:NodeShape;
\tsh:targetClass schema:ProgramMembership;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:hostingOrganization;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:member;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:members;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:membershipNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:programName;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaPronounceableText a sh:NodeShape;
\tsh:targetClass schema:PronounceableText;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:inLanguage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Language]
\t\t);
\t].


:ValidSchemaPropertyValue a sh:NodeShape;
\tsh:targetClass schema:PropertyValue;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:maxValue;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:minValue;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:propertyID;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:unitCode;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:unitText;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:value;
\t\tsh:or (
\t\t\t[sh:node :Boolean]
\t\t\t[sh:node :StructuredValue]
\t\t\t[sh:node :Number]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:valueReference;
\t\tsh:or (
\t\t\t[sh:node :PropertyValue]
\t\t\t[sh:node :StructuredValue]
\t\t\t[sh:node :QualitativeValue]
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Enumeration]
\t\t);
\t].


:ValidSchemaPropertyValueSpecification a sh:NodeShape;
\tsh:targetClass schema:PropertyValueSpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:defaultValue;
\t\tsh:or (
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:maxValue;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:minValue;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:multipleValues;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:readonlyValue;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:stepValue;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:valueMaxLength;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:valueMinLength;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:valueName;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:valuePattern;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:valueRequired;
\t\tsh:node :ValidSchemaBoolean;
\t].


:ValidSchemaPublicationEvent a sh:NodeShape;
\tsh:targetClass schema:PublicationEvent;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:free;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:isAccessibleForFree;
\t\tsh:node :ValidSchemaBoolean;
\t];
\tsh:property [
\t\tsh:path schema:publishedOn;
\t\tsh:node :ValidSchemaBroadcastService;
\t].


:ValidSchemaPublicationIssue a sh:NodeShape;
\tsh:targetClass schema:PublicationIssue;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:issueNumber;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Integer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:pageEnd;
\t\tsh:or (
\t\t\t[sh:node :Integer]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:pageStart;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Integer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:pagination;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaPublicationVolume a sh:NodeShape;
\tsh:targetClass schema:PublicationVolume;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:pageEnd;
\t\tsh:or (
\t\t\t[sh:node :Integer]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:pageStart;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Integer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:pagination;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:volumeNumber;
\t\tsh:or (
\t\t\t[sh:node :Integer]
\t\t\t[sh:node :Text]
\t\t);
\t].


:ValidSchemaPublicSwimmingPool a sh:NodeShape;
\tsh:targetClass schema:PublicSwimmingPool;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaQAPage a sh:NodeShape;
\tsh:targetClass schema:QAPage;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaQualitativeValue a sh:NodeShape;
\tsh:targetClass schema:QualitativeValue;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:additionalProperty;
\t\tsh:node :ValidSchemaPropertyValue;
\t];
\tsh:property [
\t\tsh:path schema:equal;
\t\tsh:node :ValidSchemaQualitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:greater;
\t\tsh:node :ValidSchemaQualitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:greaterOrEqual;
\t\tsh:node :ValidSchemaQualitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:lesser;
\t\tsh:node :ValidSchemaQualitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:lesserOrEqual;
\t\tsh:node :ValidSchemaQualitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:nonEqual;
\t\tsh:node :ValidSchemaQualitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:valueReference;
\t\tsh:or (
\t\t\t[sh:node :PropertyValue]
\t\t\t[sh:node :StructuredValue]
\t\t\t[sh:node :QualitativeValue]
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Enumeration]
\t\t);
\t].


:ValidSchemaQuantitativeValue a sh:NodeShape;
\tsh:targetClass schema:QuantitativeValue;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:additionalProperty;
\t\tsh:node :ValidSchemaPropertyValue;
\t];
\tsh:property [
\t\tsh:path schema:maxValue;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:minValue;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:unitCode;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:unitText;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:value;
\t\tsh:or (
\t\t\t[sh:node :Boolean]
\t\t\t[sh:node :StructuredValue]
\t\t\t[sh:node :Number]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:valueReference;
\t\tsh:or (
\t\t\t[sh:node :PropertyValue]
\t\t\t[sh:node :StructuredValue]
\t\t\t[sh:node :QualitativeValue]
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Enumeration]
\t\t);
\t].


:ValidSchemaQuantitativeValueDistribution a sh:NodeShape;
\tsh:targetClass schema:QuantitativeValueDistribution;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:duration;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:median;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:percentile10;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:percentile25;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:percentile75;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:percentile90;
\t\tsh:node :ValidSchemaNumber;
\t].


:ValidSchemaQuantity a sh:NodeShape;
\tsh:targetClass schema:Quantity;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaQuestion a sh:NodeShape;
\tsh:targetClass schema:Question;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:acceptedAnswer;
\t\tsh:or (
\t\t\t[sh:node :ItemList]
\t\t\t[sh:node :Answer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:answerCount;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:downvoteCount;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:suggestedAnswer;
\t\tsh:or (
\t\t\t[sh:node :Answer]
\t\t\t[sh:node :ItemList]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:upvoteCount;
\t\tsh:node :ValidSchemaInteger;
\t].


:ValidSchemaQuoteAction a sh:NodeShape;
\tsh:targetClass schema:QuoteAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRadioChannel a sh:NodeShape;
\tsh:targetClass schema:RadioChannel;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRadioClip a sh:NodeShape;
\tsh:targetClass schema:RadioClip;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRadioEpisode a sh:NodeShape;
\tsh:targetClass schema:RadioEpisode;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRadioSeason a sh:NodeShape;
\tsh:targetClass schema:RadioSeason;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRadioSeries a sh:NodeShape;
\tsh:targetClass schema:RadioSeries;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actor;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:actors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:containsSeason;
\t\tsh:node :ValidSchemaCreativeWorkSeason;
\t];
\tsh:property [
\t\tsh:path schema:director;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:directors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:episode;
\t\tsh:node :ValidSchemaEpisode;
\t];
\tsh:property [
\t\tsh:path schema:episodes;
\t\tsh:node :ValidSchemaEpisode;
\t];
\tsh:property [
\t\tsh:path schema:musicBy;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :MusicGroup]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numberOfEpisodes;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:numberOfSeasons;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:productionCompany;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:season;
\t\tsh:or (
\t\t\t[sh:node :CreativeWorkSeason]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:seasons;
\t\tsh:node :ValidSchemaCreativeWorkSeason;
\t];
\tsh:property [
\t\tsh:path schema:trailer;
\t\tsh:node :ValidSchemaVideoObject;
\t].


:ValidSchemaRadioStation a sh:NodeShape;
\tsh:targetClass schema:RadioStation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRating a sh:NodeShape;
\tsh:targetClass schema:Rating;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:author;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:bestRating;
\t\tsh:or (
\t\t\t[sh:node :Number]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:ratingValue;
\t\tsh:or (
\t\t\t[sh:node :Number]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:reviewAspect;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:worstRating;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t].


:ValidSchemaReactAction a sh:NodeShape;
\tsh:targetClass schema:ReactAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaReadAction a sh:NodeShape;
\tsh:targetClass schema:ReadAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRealEstateAgent a sh:NodeShape;
\tsh:targetClass schema:RealEstateAgent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRealEstateListing a sh:NodeShape;
\tsh:targetClass schema:RealEstateListing;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:datePosted;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Date]
\t\t);
\t].


:ValidSchemaReceiveAction a sh:NodeShape;
\tsh:targetClass schema:ReceiveAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:deliveryMethod;
\t\tsh:node :ValidSchemaDeliveryMethod;
\t];
\tsh:property [
\t\tsh:path schema:sender;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Audience]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaRecommendation a sh:NodeShape;
\tsh:targetClass schema:Recommendation;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:category;
\t\tsh:or (
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :PhysicalActivityCategory]
\t\t\t[sh:node :Text]
\t\t);
\t].


:ValidSchemaRecyclingCenter a sh:NodeShape;
\tsh:targetClass schema:RecyclingCenter;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRegisterAction a sh:NodeShape;
\tsh:targetClass schema:RegisterAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRejectAction a sh:NodeShape;
\tsh:targetClass schema:RejectAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRentAction a sh:NodeShape;
\tsh:targetClass schema:RentAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:landlord;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:realEstateAgent;
\t\tsh:node :ValidSchemaRealEstateAgent;
\t].


:ValidSchemaRentalCarReservation a sh:NodeShape;
\tsh:targetClass schema:RentalCarReservation;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:dropoffLocation;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:dropoffTime;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:pickupLocation;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:pickupTime;
\t\tsh:node :ValidSchemaDateTime;
\t].


:ValidSchemaReplaceAction a sh:NodeShape;
\tsh:targetClass schema:ReplaceAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:replacee;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:replacer;
\t\tsh:node :ValidSchemaThing;
\t].


:ValidSchemaReplyAction a sh:NodeShape;
\tsh:targetClass schema:ReplyAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:resultComment;
\t\tsh:node :ValidSchemaComment;
\t].


:ValidSchemaReport a sh:NodeShape;
\tsh:targetClass schema:Report;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:reportNumber;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaReservation a sh:NodeShape;
\tsh:targetClass schema:Reservation;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:bookingAgent;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:bookingTime;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:broker;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:modifiedTime;
\t\tsh:node :ValidSchemaDateTime;
\t];
\tsh:property [
\t\tsh:path schema:priceCurrency;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:programMembershipUsed;
\t\tsh:node :ValidSchemaProgramMembership;
\t];
\tsh:property [
\t\tsh:path schema:provider;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:reservationFor;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:reservationId;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:reservationStatus;
\t\tsh:node :ValidSchemaReservationStatusType;
\t];
\tsh:property [
\t\tsh:path schema:reservedTicket;
\t\tsh:node :ValidSchemaTicket;
\t];
\tsh:property [
\t\tsh:path schema:totalPrice;
\t\tsh:or (
\t\t\t[sh:node :PriceSpecification]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:underName;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaReservationPackage a sh:NodeShape;
\tsh:targetClass schema:ReservationPackage;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:subReservation;
\t\tsh:node :ValidSchemaReservation;
\t].


:ValidSchemaReservationStatusType a sh:NodeShape;
\tsh:targetClass schema:ReservationStatusType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaReserveAction a sh:NodeShape;
\tsh:targetClass schema:ReserveAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaReservoir a sh:NodeShape;
\tsh:targetClass schema:Reservoir;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaResidence a sh:NodeShape;
\tsh:targetClass schema:Residence;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaResort a sh:NodeShape;
\tsh:targetClass schema:Resort;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRestaurant a sh:NodeShape;
\tsh:targetClass schema:Restaurant;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRestrictedDiet a sh:NodeShape;
\tsh:targetClass schema:RestrictedDiet;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaResumeAction a sh:NodeShape;
\tsh:targetClass schema:ResumeAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaReturnAction a sh:NodeShape;
\tsh:targetClass schema:ReturnAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:recipient;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Audience]
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaReview a sh:NodeShape;
\tsh:targetClass schema:Review;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:itemReviewed;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:reviewAspect;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:reviewBody;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:reviewRating;
\t\tsh:node :ValidSchemaRating;
\t].


:ValidSchemaReviewAction a sh:NodeShape;
\tsh:targetClass schema:ReviewAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:resultReview;
\t\tsh:node :ValidSchemaReview;
\t].


:ValidSchemaRiverBodyOfWater a sh:NodeShape;
\tsh:targetClass schema:RiverBodyOfWater;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRole a sh:NodeShape;
\tsh:targetClass schema:Role;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:endDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:namedPosition;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:roleName;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:startDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t].


:ValidSchemaRoofingContractor a sh:NodeShape;
\tsh:targetClass schema:RoofingContractor;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRoom a sh:NodeShape;
\tsh:targetClass schema:Room;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRsvpAction a sh:NodeShape;
\tsh:targetClass schema:RsvpAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:additionalNumberOfGuests;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:comment;
\t\tsh:node :ValidSchemaComment;
\t];
\tsh:property [
\t\tsh:path schema:rsvpResponse;
\t\tsh:node :ValidSchemaRsvpResponseType;
\t].


:ValidSchemaRsvpResponseType a sh:NodeShape;
\tsh:targetClass schema:RsvpResponseType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaRVPark a sh:NodeShape;
\tsh:targetClass schema:RVPark;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSaleEvent a sh:NodeShape;
\tsh:targetClass schema:SaleEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSchedule a sh:NodeShape;
\tsh:targetClass schema:Schedule;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:duration;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:endDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:endTime;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Time]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:startDate;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:startTime;
\t\tsh:or (
\t\t\t[sh:node :Time]
\t\t\t[sh:node :DateTime]
\t\t);
\t].


:ValidSchemaScheduleAction a sh:NodeShape;
\tsh:targetClass schema:ScheduleAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaScholarlyArticle a sh:NodeShape;
\tsh:targetClass schema:ScholarlyArticle;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSchool a sh:NodeShape;
\tsh:targetClass schema:School;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaScreeningEvent a sh:NodeShape;
\tsh:targetClass schema:ScreeningEvent;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:videoFormat;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:workPresented;
\t\tsh:node :ValidSchemaMovie;
\t].


:ValidSchemaSculpture a sh:NodeShape;
\tsh:targetClass schema:Sculpture;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSeaBodyOfWater a sh:NodeShape;
\tsh:targetClass schema:SeaBodyOfWater;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSearchAction a sh:NodeShape;
\tsh:targetClass schema:SearchAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:query;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaSearchResultsPage a sh:NodeShape;
\tsh:targetClass schema:SearchResultsPage;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSeason a sh:NodeShape;
\tsh:targetClass schema:Season;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSeat a sh:NodeShape;
\tsh:targetClass schema:Seat;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:seatNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:seatRow;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:seatSection;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:seatingType;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :QualitativeValue]
\t\t);
\t].


:ValidSchemaSelfStorage a sh:NodeShape;
\tsh:targetClass schema:SelfStorage;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSellAction a sh:NodeShape;
\tsh:targetClass schema:SellAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:buyer;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:warrantyPromise;
\t\tsh:node :ValidSchemaWarrantyPromise;
\t].


:ValidSchemaSendAction a sh:NodeShape;
\tsh:targetClass schema:SendAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:deliveryMethod;
\t\tsh:node :ValidSchemaDeliveryMethod;
\t];
\tsh:property [
\t\tsh:path schema:recipient;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Audience]
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaSeries a sh:NodeShape;
\tsh:targetClass schema:Series;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaService a sh:NodeShape;
\tsh:targetClass schema:Service;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:aggregateRating;
\t\tsh:node :ValidSchemaAggregateRating;
\t];
\tsh:property [
\t\tsh:path schema:areaServed;
\t\tsh:or (
\t\t\t[sh:node :AdministrativeArea]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:audience;
\t\tsh:node :ValidSchemaAudience;
\t];
\tsh:property [
\t\tsh:path schema:availableChannel;
\t\tsh:node :ValidSchemaServiceChannel;
\t];
\tsh:property [
\t\tsh:path schema:award;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:brand;
\t\tsh:or (
\t\t\t[sh:node :Brand]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:broker;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:category;
\t\tsh:or (
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :PhysicalActivityCategory]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:hasOfferCatalog;
\t\tsh:node :ValidSchemaOfferCatalog;
\t];
\tsh:property [
\t\tsh:path schema:hoursAvailable;
\t\tsh:node :ValidSchemaOpeningHoursSpecification;
\t];
\tsh:property [
\t\tsh:path schema:isRelatedTo;
\t\tsh:or (
\t\t\t[sh:node :Product]
\t\t\t[sh:node :Service]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:isSimilarTo;
\t\tsh:or (
\t\t\t[sh:node :Service]
\t\t\t[sh:node :Product]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:logo;
\t\tsh:or (
\t\t\t[sh:node :ImageObject]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:offers;
\t\tsh:or (
\t\t\t[sh:node :Demand]
\t\t\t[sh:node :Offer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:produces;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:provider;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:providerMobility;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:review;
\t\tsh:node :ValidSchemaReview;
\t];
\tsh:property [
\t\tsh:path schema:serviceArea;
\t\tsh:or (
\t\t\t[sh:node :Place]
\t\t\t[sh:node :GeoShape]
\t\t\t[sh:node :AdministrativeArea]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:serviceAudience;
\t\tsh:node :ValidSchemaAudience;
\t];
\tsh:property [
\t\tsh:path schema:serviceOutput;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:serviceType;
\t\tsh:or (
\t\t\t[sh:node :GovernmentBenefitsType]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:slogan;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaServiceChannel a sh:NodeShape;
\tsh:targetClass schema:ServiceChannel;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:availableLanguage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Language]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:processingTime;
\t\tsh:node :ValidSchemaDuration;
\t];
\tsh:property [
\t\tsh:path schema:providesService;
\t\tsh:node :ValidSchemaService;
\t];
\tsh:property [
\t\tsh:path schema:serviceLocation;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:servicePhone;
\t\tsh:node :ValidSchemaContactPoint;
\t];
\tsh:property [
\t\tsh:path schema:servicePostalAddress;
\t\tsh:node :ValidSchemaPostalAddress;
\t];
\tsh:property [
\t\tsh:path schema:serviceSmsNumber;
\t\tsh:node :ValidSchemaContactPoint;
\t];
\tsh:property [
\t\tsh:path schema:serviceUrl;
\t\tsh:node :ValidSchemaURL;
\t].


:ValidSchemaShareAction a sh:NodeShape;
\tsh:targetClass schema:ShareAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaShoeStore a sh:NodeShape;
\tsh:targetClass schema:ShoeStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaShoppingCenter a sh:NodeShape;
\tsh:targetClass schema:ShoppingCenter;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSingleFamilyResidence a sh:NodeShape;
\tsh:targetClass schema:SingleFamilyResidence;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:numberOfRooms;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:occupancy;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t].


:ValidSchemaSiteNavigationElement a sh:NodeShape;
\tsh:targetClass schema:SiteNavigationElement;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSkiResort a sh:NodeShape;
\tsh:targetClass schema:SkiResort;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSocialEvent a sh:NodeShape;
\tsh:targetClass schema:SocialEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSocialMediaPosting a sh:NodeShape;
\tsh:targetClass schema:SocialMediaPosting;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:sharedContent;
\t\tsh:node :ValidSchemaCreativeWork;
\t].


:ValidSchemaSoftwareApplication a sh:NodeShape;
\tsh:targetClass schema:SoftwareApplication;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:applicationCategory;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:applicationSubCategory;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:applicationSuite;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:availableOnDevice;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:countriesNotSupported;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:countriesSupported;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:device;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:downloadUrl;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:featureList;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:fileSize;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:installUrl;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:memoryRequirements;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:operatingSystem;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:permissions;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:processorRequirements;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:releaseNotes;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:requirements;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:screenshot;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :ImageObject]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:softwareAddOn;
\t\tsh:node :ValidSchemaSoftwareApplication;
\t];
\tsh:property [
\t\tsh:path schema:softwareHelp;
\t\tsh:node :ValidSchemaCreativeWork;
\t];
\tsh:property [
\t\tsh:path schema:softwareRequirements;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:softwareVersion;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:storageRequirements;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:supportingData;
\t\tsh:node :ValidSchemaDataFeed;
\t].


:ValidSchemaSoftwareSourceCode a sh:NodeShape;
\tsh:targetClass schema:SoftwareSourceCode;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:codeRepository;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:codeSampleType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:programmingLanguage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :ComputerLanguage]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:runtime;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:runtimePlatform;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:sampleType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:targetProduct;
\t\tsh:node :ValidSchemaSoftwareApplication;
\t].


:ValidSchemaSomeProducts a sh:NodeShape;
\tsh:targetClass schema:SomeProducts;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:inventoryLevel;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t].


:ValidSchemaSpeakableSpecification a sh:NodeShape;
\tsh:targetClass schema:SpeakableSpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:cssSelector;
\t\tsh:node :ValidSchemaCssSelectorType;
\t];
\tsh:property [
\t\tsh:path schema:xpath;
\t\tsh:node :ValidSchemaXPathType;
\t].


:ValidSchemaSpecialAnnouncement a sh:NodeShape;
\tsh:targetClass schema:SpecialAnnouncement;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:category;
\t\tsh:or (
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :URL]
\t\t\t[sh:node :PhysicalActivityCategory]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:datePosted;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Date]
\t\t);
\t].


:ValidSchemaSpecialty a sh:NodeShape;
\tsh:targetClass schema:Specialty;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSportingGoodsStore a sh:NodeShape;
\tsh:targetClass schema:SportingGoodsStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSportsActivityLocation a sh:NodeShape;
\tsh:targetClass schema:SportsActivityLocation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSportsClub a sh:NodeShape;
\tsh:targetClass schema:SportsClub;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSportsEvent a sh:NodeShape;
\tsh:targetClass schema:SportsEvent;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:awayTeam;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :SportsTeam]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:competitor;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :SportsTeam]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:homeTeam;
\t\tsh:or (
\t\t\t[sh:node :SportsTeam]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaSportsOrganization a sh:NodeShape;
\tsh:targetClass schema:SportsOrganization;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSportsTeam a sh:NodeShape;
\tsh:targetClass schema:SportsTeam;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:athlete;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:coach;
\t\tsh:node :ValidSchemaPerson;
\t].


:ValidSchemaSpreadsheetDigitalDocument a sh:NodeShape;
\tsh:targetClass schema:SpreadsheetDigitalDocument;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaStadiumOrArena a sh:NodeShape;
\tsh:targetClass schema:StadiumOrArena;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaState a sh:NodeShape;
\tsh:targetClass schema:State;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSteeringPositionValue a sh:NodeShape;
\tsh:targetClass schema:SteeringPositionValue;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaStore a sh:NodeShape;
\tsh:targetClass schema:Store;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaStructuredValue a sh:NodeShape;
\tsh:targetClass schema:StructuredValue;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSubscribeAction a sh:NodeShape;
\tsh:targetClass schema:SubscribeAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSubwayStation a sh:NodeShape;
\tsh:targetClass schema:SubwayStation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSuite a sh:NodeShape;
\tsh:targetClass schema:Suite;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:bed;
\t\tsh:or (
\t\t\t[sh:node :BedDetails]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :BedType]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numberOfRooms;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:occupancy;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t].


:ValidSchemaSuspendAction a sh:NodeShape;
\tsh:targetClass schema:SuspendAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaSynagogue a sh:NodeShape;
\tsh:targetClass schema:Synagogue;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTable a sh:NodeShape;
\tsh:targetClass schema:Table;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTakeAction a sh:NodeShape;
\tsh:targetClass schema:TakeAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTattooParlor a sh:NodeShape;
\tsh:targetClass schema:TattooParlor;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTaxi a sh:NodeShape;
\tsh:targetClass schema:Taxi;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTaxiReservation a sh:NodeShape;
\tsh:targetClass schema:TaxiReservation;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:partySize;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Integer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:pickupLocation;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:pickupTime;
\t\tsh:node :ValidSchemaDateTime;
\t].


:ValidSchemaTaxiService a sh:NodeShape;
\tsh:targetClass schema:TaxiService;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTaxiStand a sh:NodeShape;
\tsh:targetClass schema:TaxiStand;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTechArticle a sh:NodeShape;
\tsh:targetClass schema:TechArticle;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:dependencies;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:proficiencyLevel;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaTelevisionChannel a sh:NodeShape;
\tsh:targetClass schema:TelevisionChannel;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTelevisionStation a sh:NodeShape;
\tsh:targetClass schema:TelevisionStation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTennisComplex a sh:NodeShape;
\tsh:targetClass schema:TennisComplex;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTextDigitalDocument a sh:NodeShape;
\tsh:targetClass schema:TextDigitalDocument;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTheaterEvent a sh:NodeShape;
\tsh:targetClass schema:TheaterEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTheaterGroup a sh:NodeShape;
\tsh:targetClass schema:TheaterGroup;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTicket a sh:NodeShape;
\tsh:targetClass schema:Ticket;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:dateIssued;
\t\tsh:or (
\t\t\t[sh:node :Date]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:issuedBy;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:priceCurrency;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:ticketNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:ticketToken;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:ticketedSeat;
\t\tsh:node :ValidSchemaSeat;
\t];
\tsh:property [
\t\tsh:path schema:totalPrice;
\t\tsh:or (
\t\t\t[sh:node :PriceSpecification]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:underName;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaTieAction a sh:NodeShape;
\tsh:targetClass schema:TieAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTime a sh:NodeShape;
\tsh:targetClass schema:Time;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTipAction a sh:NodeShape;
\tsh:targetClass schema:TipAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:recipient;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Audience]
\t\t\t[sh:node :ContactPoint]
\t\t\t[sh:node :Person]
\t\t);
\t].


:ValidSchemaTireShop a sh:NodeShape;
\tsh:targetClass schema:TireShop;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTouristAttraction a sh:NodeShape;
\tsh:targetClass schema:TouristAttraction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:availableLanguage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Language]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:touristType;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Audience]
\t\t);
\t].


:ValidSchemaTouristDestination a sh:NodeShape;
\tsh:targetClass schema:TouristDestination;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:touristType;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Audience]
\t\t);
\t].


:ValidSchemaTouristInformationCenter a sh:NodeShape;
\tsh:targetClass schema:TouristInformationCenter;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTouristTrip a sh:NodeShape;
\tsh:targetClass schema:TouristTrip;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:touristType;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Audience]
\t\t);
\t].


:ValidSchemaToyStore a sh:NodeShape;
\tsh:targetClass schema:ToyStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTrackAction a sh:NodeShape;
\tsh:targetClass schema:TrackAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:deliveryMethod;
\t\tsh:node :ValidSchemaDeliveryMethod;
\t].


:ValidSchemaTradeAction a sh:NodeShape;
\tsh:targetClass schema:TradeAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:price;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:priceCurrency;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:priceSpecification;
\t\tsh:node :ValidSchemaPriceSpecification;
\t].


:ValidSchemaTrainReservation a sh:NodeShape;
\tsh:targetClass schema:TrainReservation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTrainStation a sh:NodeShape;
\tsh:targetClass schema:TrainStation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTrainTrip a sh:NodeShape;
\tsh:targetClass schema:TrainTrip;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:arrivalPlatform;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:arrivalStation;
\t\tsh:node :ValidSchemaTrainStation;
\t];
\tsh:property [
\t\tsh:path schema:departurePlatform;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:departureStation;
\t\tsh:node :ValidSchemaTrainStation;
\t];
\tsh:property [
\t\tsh:path schema:trainName;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:trainNumber;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaTransferAction a sh:NodeShape;
\tsh:targetClass schema:TransferAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:fromLocation;
\t\tsh:node :ValidSchemaPlace;
\t];
\tsh:property [
\t\tsh:path schema:toLocation;
\t\tsh:node :ValidSchemaPlace;
\t].


:ValidSchemaTravelAction a sh:NodeShape;
\tsh:targetClass schema:TravelAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:distance;
\t\tsh:node :ValidSchemaDistance;
\t].


:ValidSchemaTravelAgency a sh:NodeShape;
\tsh:targetClass schema:TravelAgency;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaTrip a sh:NodeShape;
\tsh:targetClass schema:Trip;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:arrivalTime;
\t\tsh:or (
\t\t\t[sh:node :Time]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:departureTime;
\t\tsh:or (
\t\t\t[sh:node :Time]
\t\t\t[sh:node :DateTime]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:offers;
\t\tsh:or (
\t\t\t[sh:node :Demand]
\t\t\t[sh:node :Offer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:provider;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :Organization]
\t\t);
\t].


:ValidSchemaTVClip a sh:NodeShape;
\tsh:targetClass schema:TVClip;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:partOfTVSeries;
\t\tsh:node :ValidSchemaTVSeries;
\t].


:ValidSchemaTVEpisode a sh:NodeShape;
\tsh:targetClass schema:TVEpisode;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:countryOfOrigin;
\t\tsh:node :ValidSchemaCountry;
\t];
\tsh:property [
\t\tsh:path schema:partOfTVSeries;
\t\tsh:node :ValidSchemaTVSeries;
\t].


:ValidSchemaTVSeason a sh:NodeShape;
\tsh:targetClass schema:TVSeason;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:countryOfOrigin;
\t\tsh:node :ValidSchemaCountry;
\t];
\tsh:property [
\t\tsh:path schema:partOfTVSeries;
\t\tsh:node :ValidSchemaTVSeries;
\t].


:ValidSchemaTVSeries a sh:NodeShape;
\tsh:targetClass schema:TVSeries;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actor;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:actors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:containsSeason;
\t\tsh:node :ValidSchemaCreativeWorkSeason;
\t];
\tsh:property [
\t\tsh:path schema:countryOfOrigin;
\t\tsh:node :ValidSchemaCountry;
\t];
\tsh:property [
\t\tsh:path schema:director;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:directors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:episode;
\t\tsh:node :ValidSchemaEpisode;
\t];
\tsh:property [
\t\tsh:path schema:episodes;
\t\tsh:node :ValidSchemaEpisode;
\t];
\tsh:property [
\t\tsh:path schema:musicBy;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :MusicGroup]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numberOfEpisodes;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:numberOfSeasons;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:productionCompany;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:season;
\t\tsh:or (
\t\t\t[sh:node :CreativeWorkSeason]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:seasons;
\t\tsh:node :ValidSchemaCreativeWorkSeason;
\t];
\tsh:property [
\t\tsh:path schema:trailer;
\t\tsh:node :ValidSchemaVideoObject;
\t].


:ValidSchemaTypeAndQuantityNode a sh:NodeShape;
\tsh:targetClass schema:TypeAndQuantityNode;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:amountOfThisGood;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:businessFunction;
\t\tsh:node :ValidSchemaBusinessFunction;
\t];
\tsh:property [
\t\tsh:path schema:typeOfGood;
\t\tsh:or (
\t\t\t[sh:node :Service]
\t\t\t[sh:node :Product]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:unitCode;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:unitText;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaUnitPriceSpecification a sh:NodeShape;
\tsh:targetClass schema:UnitPriceSpecification;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:billingIncrement;
\t\tsh:node :ValidSchemaNumber;
\t];
\tsh:property [
\t\tsh:path schema:priceType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:referenceQuantity;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:unitCode;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:unitText;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaUnRegisterAction a sh:NodeShape;
\tsh:targetClass schema:UnRegisterAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaUpdateAction a sh:NodeShape;
\tsh:targetClass schema:UpdateAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:collection;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:targetCollection;
\t\tsh:node :ValidSchemaThing;
\t].


:ValidSchemaUseAction a sh:NodeShape;
\tsh:targetClass schema:UseAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaUserBlocks a sh:NodeShape;
\tsh:targetClass schema:UserBlocks;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaUserCheckins a sh:NodeShape;
\tsh:targetClass schema:UserCheckins;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaUserComments a sh:NodeShape;
\tsh:targetClass schema:UserComments;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:commentText;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:commentTime;
\t\tsh:or (
\t\t\t[sh:node :DateTime]
\t\t\t[sh:node :Date]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:creator;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:discusses;
\t\tsh:node :ValidSchemaCreativeWork;
\t];
\tsh:property [
\t\tsh:path schema:replyToUrl;
\t\tsh:node :ValidSchemaURL;
\t].


:ValidSchemaUserDownloads a sh:NodeShape;
\tsh:targetClass schema:UserDownloads;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaUserInteraction a sh:NodeShape;
\tsh:targetClass schema:UserInteraction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaUserLikes a sh:NodeShape;
\tsh:targetClass schema:UserLikes;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaUserPageVisits a sh:NodeShape;
\tsh:targetClass schema:UserPageVisits;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaUserPlays a sh:NodeShape;
\tsh:targetClass schema:UserPlays;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaUserPlusOnes a sh:NodeShape;
\tsh:targetClass schema:UserPlusOnes;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaUserTweets a sh:NodeShape;
\tsh:targetClass schema:UserTweets;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaVehicle a sh:NodeShape;
\tsh:targetClass schema:Vehicle;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:cargoVolume;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:dateVehicleFirstRegistered;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:driveWheelConfiguration;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :DriveWheelConfigurationValue]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:fuelConsumption;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:fuelEfficiency;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:fuelType;
\t\tsh:or (
\t\t\t[sh:node :QualitativeValue]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:knownVehicleDamages;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:mileageFromOdometer;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:numberOfAirbags;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numberOfAxles;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numberOfDoors;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numberOfForwardGears;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Number]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numberOfPreviousOwners;
\t\tsh:or (
\t\t\t[sh:node :Number]
\t\t\t[sh:node :QuantitativeValue]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:productionDate;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:purchaseDate;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:steeringPosition;
\t\tsh:node :ValidSchemaSteeringPositionValue;
\t];
\tsh:property [
\t\tsh:path schema:vehicleConfiguration;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:vehicleEngine;
\t\tsh:node :ValidSchemaEngineSpecification;
\t];
\tsh:property [
\t\tsh:path schema:vehicleIdentificationNumber;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:vehicleInteriorColor;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:vehicleInteriorType;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:vehicleModelDate;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:vehicleSeatingCapacity;
\t\tsh:or (
\t\t\t[sh:node :Number]
\t\t\t[sh:node :QuantitativeValue]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:vehicleTransmission;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t\t[sh:node :QualitativeValue]
\t\t);
\t].


:ValidSchemaVideoGallery a sh:NodeShape;
\tsh:targetClass schema:VideoGallery;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaVideoGame a sh:NodeShape;
\tsh:targetClass schema:VideoGame;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actor;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:actors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:cheatCode;
\t\tsh:node :ValidSchemaCreativeWork;
\t];
\tsh:property [
\t\tsh:path schema:director;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:directors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:gamePlatform;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:gameServer;
\t\tsh:node :ValidSchemaGameServer;
\t];
\tsh:property [
\t\tsh:path schema:gameTip;
\t\tsh:node :ValidSchemaCreativeWork;
\t];
\tsh:property [
\t\tsh:path schema:musicBy;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :MusicGroup]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:playMode;
\t\tsh:node :ValidSchemaGamePlayMode;
\t];
\tsh:property [
\t\tsh:path schema:trailer;
\t\tsh:node :ValidSchemaVideoObject;
\t].


:ValidSchemaVideoGameClip a sh:NodeShape;
\tsh:targetClass schema:VideoGameClip;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaVideoGameSeries a sh:NodeShape;
\tsh:targetClass schema:VideoGameSeries;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actor;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:actors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:characterAttribute;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:cheatCode;
\t\tsh:node :ValidSchemaCreativeWork;
\t];
\tsh:property [
\t\tsh:path schema:containsSeason;
\t\tsh:node :ValidSchemaCreativeWorkSeason;
\t];
\tsh:property [
\t\tsh:path schema:director;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:directors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:episode;
\t\tsh:node :ValidSchemaEpisode;
\t];
\tsh:property [
\t\tsh:path schema:episodes;
\t\tsh:node :ValidSchemaEpisode;
\t];
\tsh:property [
\t\tsh:path schema:gameItem;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:gameLocation;
\t\tsh:or (
\t\t\t[sh:node :PostalAddress]
\t\t\t[sh:node :Place]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:gamePlatform;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Thing]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:musicBy;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :MusicGroup]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:numberOfEpisodes;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:numberOfPlayers;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:numberOfSeasons;
\t\tsh:node :ValidSchemaInteger;
\t];
\tsh:property [
\t\tsh:path schema:playMode;
\t\tsh:node :ValidSchemaGamePlayMode;
\t];
\tsh:property [
\t\tsh:path schema:productionCompany;
\t\tsh:node :ValidSchemaOrganization;
\t];
\tsh:property [
\t\tsh:path schema:quest;
\t\tsh:node :ValidSchemaThing;
\t];
\tsh:property [
\t\tsh:path schema:season;
\t\tsh:or (
\t\t\t[sh:node :CreativeWorkSeason]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:seasons;
\t\tsh:node :ValidSchemaCreativeWorkSeason;
\t];
\tsh:property [
\t\tsh:path schema:trailer;
\t\tsh:node :ValidSchemaVideoObject;
\t].


:ValidSchemaVideoObject a sh:NodeShape;
\tsh:targetClass schema:VideoObject;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:actor;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:actors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:caption;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :MediaObject]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:director;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:directors;
\t\tsh:node :ValidSchemaPerson;
\t];
\tsh:property [
\t\tsh:path schema:musicBy;
\t\tsh:or (
\t\t\t[sh:node :Person]
\t\t\t[sh:node :MusicGroup]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:thumbnail;
\t\tsh:node :ValidSchemaImageObject;
\t];
\tsh:property [
\t\tsh:path schema:transcript;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:videoFrameSize;
\t\tsh:node :ValidSchemaText;
\t];
\tsh:property [
\t\tsh:path schema:videoQuality;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaViewAction a sh:NodeShape;
\tsh:targetClass schema:ViewAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaVirtualLocation a sh:NodeShape;
\tsh:targetClass schema:VirtualLocation;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaVisualArtsEvent a sh:NodeShape;
\tsh:targetClass schema:VisualArtsEvent;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaVisualArtwork a sh:NodeShape;
\tsh:targetClass schema:VisualArtwork;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:artEdition;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Integer]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:artMedium;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:artform;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :Text]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:artworkSurface;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:depth;
\t\tsh:or (
\t\t\t[sh:node :Distance]
\t\t\t[sh:node :QuantitativeValue]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:height;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Distance]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:surface;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :URL]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:width;
\t\tsh:or (
\t\t\t[sh:node :QuantitativeValue]
\t\t\t[sh:node :Distance]
\t\t);
\t].


:ValidSchemaVolcano a sh:NodeShape;
\tsh:targetClass schema:Volcano;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaVoteAction a sh:NodeShape;
\tsh:targetClass schema:VoteAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:candidate;
\t\tsh:node :ValidSchemaPerson;
\t].


:ValidSchemaWantAction a sh:NodeShape;
\tsh:targetClass schema:WantAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaWarrantyPromise a sh:NodeShape;
\tsh:targetClass schema:WarrantyPromise;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:durationOfWarranty;
\t\tsh:node :ValidSchemaQuantitativeValue;
\t];
\tsh:property [
\t\tsh:path schema:warrantyScope;
\t\tsh:node :ValidSchemaWarrantyScope;
\t].


:ValidSchemaWarrantyScope a sh:NodeShape;
\tsh:targetClass schema:WarrantyScope;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaWatchAction a sh:NodeShape;
\tsh:targetClass schema:WatchAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaWaterfall a sh:NodeShape;
\tsh:targetClass schema:Waterfall;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaWearAction a sh:NodeShape;
\tsh:targetClass schema:WearAction;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaWebApplication a sh:NodeShape;
\tsh:targetClass schema:WebApplication;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:browserRequirements;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaWebPage a sh:NodeShape;
\tsh:targetClass schema:WebPage;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:breadcrumb;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :BreadcrumbList]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:lastReviewed;
\t\tsh:node :ValidSchemaDate;
\t];
\tsh:property [
\t\tsh:path schema:mainContentOfPage;
\t\tsh:node :ValidSchemaWebPageElement;
\t];
\tsh:property [
\t\tsh:path schema:primaryImageOfPage;
\t\tsh:node :ValidSchemaImageObject;
\t];
\tsh:property [
\t\tsh:path schema:relatedLink;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:reviewedBy;
\t\tsh:or (
\t\t\t[sh:node :Organization]
\t\t\t[sh:node :Person]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:significantLink;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:significantLinks;
\t\tsh:node :ValidSchemaURL;
\t];
\tsh:property [
\t\tsh:path schema:speakable;
\t\tsh:or (
\t\t\t[sh:node :URL]
\t\t\t[sh:node :SpeakableSpecification]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:specialty;
\t\tsh:node :ValidSchemaSpecialty;
\t].


:ValidSchemaWebPageElement a sh:NodeShape;
\tsh:targetClass schema:WebPageElement;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:cssSelector;
\t\tsh:node :ValidSchemaCssSelectorType;
\t];
\tsh:property [
\t\tsh:path schema:xpath;
\t\tsh:node :ValidSchemaXPathType;
\t].


:ValidSchemaWebSite a sh:NodeShape;
\tsh:targetClass schema:WebSite;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:issn;
\t\tsh:node :ValidSchemaText;
\t].


:ValidSchemaWholesaleStore a sh:NodeShape;
\tsh:targetClass schema:WholesaleStore;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaWinAction a sh:NodeShape;
\tsh:targetClass schema:WinAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:loser;
\t\tsh:node :ValidSchemaPerson;
\t].


:ValidSchemaWinery a sh:NodeShape;
\tsh:targetClass schema:Winery;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaWorkersUnion a sh:NodeShape;
\tsh:targetClass schema:WorkersUnion;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaWPAdBlock a sh:NodeShape;
\tsh:targetClass schema:WPAdBlock;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaWPFooter a sh:NodeShape;
\tsh:targetClass schema:WPFooter;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaWPHeader a sh:NodeShape;
\tsh:targetClass schema:WPHeader;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaWPSideBar a sh:NodeShape;
\tsh:targetClass schema:WPSideBar;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaWriteAction a sh:NodeShape;
\tsh:targetClass schema:WriteAction;
\tsh:nodeKind sh:BlankNodeOrIRI;
\tsh:property [
\t\tsh:path schema:inLanguage;
\t\tsh:or (
\t\t\t[sh:node :Text]
\t\t\t[sh:node :Language]
\t\t);
\t];
\tsh:property [
\t\tsh:path schema:language;
\t\tsh:node :ValidSchemaLanguage;
\t].


:ValidSchemaXPathType a sh:NodeShape;
\tsh:targetClass schema:XPathType;
\tsh:nodeKind sh:BlankNodeOrIRI.


:ValidSchemaZoo a sh:NodeShape;
\tsh:targetClass schema:Zoo;
\tsh:nodeKind sh:BlankNodeOrIRI.














:ValidServiceARecipe a sh:NodeShape;
    sh:targetClass schema:Recipe;
    sh:property [
        sh:path schema:name;
        sh:minCount 1;
        sh:severity sh:Violation;
        schema:url "https://schema.org/name";
        schema:description "Required. Name of the recipe.";
    ];
    sh:property [
        sh:path schema:author;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/author";
        schema:description "The author of the recipe.";
    ];
    sh:property [
        sh:path schema:datePublished;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/datePublished";
        schema:description "The date the recipe was published.";
    ];
    sh:property [
        sh:path schema:recipeCategory;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeCategory";
        schema:description "The type of dish. For example, the dish could be an appetizer, main course, or desert.";
    ];
    sh:property [
        sh:path schema:description;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/description";
        schema:description "Summary describing the recipe.";
    ];
    sh:property [
        sh:path schema:image;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/image";
        schema:description "Picture associated with the recipe. This can be a picture of the dish or the ingredients of the dish.";
    ];
    sh:property [
        sh:path schema:review;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/review";
        schema:description "Review of the recipe.";
    ];
    sh:property [
        sh:path schema:prepTime;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/prepTime";
        schema:description "The amount of time needed to prepare the ingredients of the recipe.";
    ];
    sh:property [
        sh:path schema:totalTime;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/totalTime";
        schema:description "The total time it takes to prepare the ingredients and cook the dish.";
    ];
    sh:property [
        sh:path schema:recipeYield;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeYield";
        schema:description "The quantity of the dish prepared by the recipe (e.g. number of servings).";
    ];
    sh:property [
        sh:path schema:nutrition;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/nutrition";
        schema:description "Nutritional information of the dish the recipe is used to prepare.";
    ];
    sh:property [
        sh:path schema:recipeIngredient;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeIngredient";
        schema:description "An ingredient used in the recipe.";
    ];
    sh:property [
        sh:path schema:recipeInstructions;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeInstructions";
        schema:description "The steps specified by the recipe to prepare the dish.";
    ].


:ValidServiceBRecipe a sh:NodeShape;
    sh:targetClass schema:Recipe;
    sh:property [
        sh:path schema:name;
        sh:minCount 1;
        sh:severity sh:Violation;
        schema:url "https://schema.org/name";
        schema:description "The name of the dish.";
    ];
    sh:property [
        sh:path schema:image;
        sh:minCount 1;
        sh:severity sh:Violation;
        schema:url "https://schema.org/image";
        schema:description "Image of the completed dish.";
    ];
    sh:property [
        sh:path schema:aggregateRating;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/aggregateRating";
        schema:description "Annotation for the average review score assigned to the item.";
    ];
    sh:property [
        sh:path schema:author;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/author";
        schema:description: "The name of the person or organization that wrote the recipe.";
    ];
    sh:property [
        sh:path schema:cookTime;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/cookTime";
        schema:description "The time it takes to actually cook the dish in ISO 8601 format";
    ];
    sh:property [
        sh:path schema:datePublished;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/datePublished";
        schema:description "The date the recipe was published in ISO 8601 format";
    ];
    sh:property [
        sh:path schema:description;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/description";
        schema:description "A short summary describing the dish.";
    ];
    sh:property [
        sh:path schema:keywords;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/keywords";
        schema:description "Other terms for your recipe such as the season, the holiday, or other descriptors";
    ];
    sh:property [
        sh:path schema:prepTime;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/prepTime";
        schema:description "The length of time it takes to prepare the dish, in ISO 8601 format";
    ];
    sh:property [
        sh:path schema:recipeCategory;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeCategoty";
        schema:description "The type of meal or course your recipe is about";
    ];
    sh:property [
        sh:path schema:recipeCuisine;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeCusine";
        schema:description "The region associated with your recipe";
    ];
    sh:property [
        sh:path schema:recipeIngredient;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeIngredient";
        schema:description "An ingredient used in the recipe.";
    ];
    sh:property [
        sh:path schema:recipeInstructions;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeInstructions";
        schema:description "The steps to make the dish";
    ];
    sh:property [
        sh:path schema:recipeYield;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeYield";
        schema:description "The quantity produced by the recipe. Specify the number of servings produced from this recipe with just a number";
    ];
    sh:property [
        sh:path schema:totalTime;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/totalTime";
        schema:description "The total time it takes to prepare the cook the dish, in ISO 8601 format";
    ].


:ValidServiceCRecipe a sh:NodeShape;
    sh:targetClass schema:Recipe;
    sh:property [
        sh:path schema:name;
        sh:minCount 1;
        sh:severity sh:Violation;
        schema:url "https://schema.org/name";
        schema:description "The name of the recipe. This title may be truncated, depending on length. All formatting and HTML tags will be removed.";
    ];
    sh:property [
        sh:path schema:ingredients;
        sh:minCount 1;
        sh:severity sh:Violation;
        schema:url "https://schema.org/ingredients";
        schema:description "The ingredients used in the recipe. Annotate each individual ingredient separately.";
    ];
    sh:property [
        sh:path schema:url;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/url";
        schema:description "The canonical URL for the page.";
    ];
    sh:property [
        sh:path schema:image;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/image";
        schema:description "The URL for a high-resolution image of the recipe. You can add up to 6 images..";
    ];
    sh:property [
        sh:path schema:totalTime;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/totalTime";
        schema:description "The total time it takes to cook and prepare the recipe.";
    ];
    sh:property [
        sh:path schema:recipeYield;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeYield";
        schema:description "The quantity or servings made by this recipe";
    ];
    sh:property [
        sh:path schema:aggregateRating;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/aggregateRating";
        schema:description "The overall rating, based on a collection of reviews or ratings, of the item.";
    ].


:ValidServiceDRecipe a sh:NodeShape;
    sh:targetClass schema:Recipe;
    sh:property [
        sh:path schema:name;
        sh:minCount 1;
        sh:severity sh:Violation;
        schema:url "https://schema.org/name";
        schema:description "The recipe or dish name.";
    ];
    sh:property [
        sh:path schema:recipeIngredient;
        sh:minCount 1;
        sh:severity sh:Violation;
        schema:url "https://schema.org/recipeIngredient";
        schema:description "Ingredients in the recipe and their volumes or amounts (may be several).";
    ];
    sh:property [
        sh:path schema:recipeInstructions;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeInstructions";
        schema:description "cooking instructions.";
    ];
    sh:property [
        sh:path schema:recipeCategory;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeCategory";
        schema:description "Type of dish: for example, hot main dish, dessert.";
    ];
    sh:property [
        sh:path schema:recipeYield;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeYield";
        schema:description "Number of servings.";
    ];
    sh:property [
        sh:path schema:totalTime;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/totalTime";
        schema:description "Cooking time (if missing, cookTime is used). Specified in the ISO 8601 format. For example, PT30M (30 minutes).";
    ];
    sh:property [
        sh:path schema:image;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/image";
        schema:description " URL of the cooking images (can be several). We recommend you to fill in this field for creating a better snippet.";
    ];
    sh:property [
        sh:path schema:author;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/author";
        schema:description "Author of the recipe.";
    ];
    sh:property [
        sh:path schema:nutrition;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/nutrition";
        schema:description "National cuisine the recipe belongs to. One recipe can contain only one cuisine—type element.";
    ];
    sh:property [
        sh:path schema:recipeCuisine;
        sh:minCount 1;
        sh:severity sh:Warning;
        schema:url "https://schema.org/recipeCuisine";
        schema:description "Energy and nutrition value of the dish, meaning the number of calories and the amount of fat, protein, carbohydrates, vitamins, and so on.";
    ].
`;