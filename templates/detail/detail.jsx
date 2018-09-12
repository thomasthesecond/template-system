import React from "react";
import cn from "classnames";
import { Template, Divider } from "../../layout";
import styles from "./detail.css";

export const TemplateDetail = ({ children }) => {
  const areas = Template.defineAreas([
    "activitiesLodging",
    "activityFeatures",
    "adRail",
    "breadcrumbs",
    "callToActionAside",
    "callToActionMobile",
    "descriptionPartner",
    "header",
    "hero",
    "hotels",
    "infoEssential",
    "infoLocation",
    "map",
    "reviewEssential",
    "reviewExtension",
    "tour",
    "tourItinerary",
  ], children);

  return (
    <Template className={styles.templateDetail}>
      {areas.breadcrumbs &&
        <Template.Area
          key="breadcrumbs"
          className="templateArea-breadcrumbs"
        >
          {areas.breadcrumbs}
        </Template.Area>
      }

      {areas.header &&
        <Template.Area
          key="header"
          className={styles["templateArea-header"]}
        >
          {areas.header}
        </Template.Area>
      }

      {areas.hero &&
        <Template.Area
          key="hero"
          className={styles.templateAreaHero}
        >
          {areas.hero}
        </Template.Area>
      }

      {areas.callToActionMobile &&
        <Template.Area
          key="callToActionMobile"
          className={styles.templateAreaCallToActionMobile}
        >
          {areas.callToActionMobile}
        </Template.Area>
      }

      {areas.reviewEssential &&
        <Template.Area
          key="reviewEssential"
          className={cn(
            styles.templateAreaLeftRailModule,
            styles.templateAreaArticle,
          )}
        >
          {areas.reviewEssential}
        </Template.Area>
      }

      <aside className={styles.templateAreaRightRail}>
        {areas.callToActionAside &&
          <Template.Area
            key="callToActionAside"
            className={cn(
              styles.templateAreaRightRailModule,
              styles.templateAreaCallToActionAside,
              areas.callToActionMobile && styles.templateAreaCallToActionAsideDesktopOnly,
            )}
          >
            {areas.callToActionAside}
          </Template.Area>
        }

        {areas.infoLocation &&
          <React.Fragment>
            <Template.Area
              key="infoLocation"
              className={cn(
                styles.templateAreaRightRailModule,
                styles.templateAreaRightRailModulePadded,
               )}
            >
              {areas.infoLocation}
            </Template.Area>

            <Divider className={styles.templateAreaRightRailDivider} />
          </React.Fragment>
        }

        {areas.infoEssential &&
          <React.Fragment>
            <Template.Area
              key="infoEssential"
              className={cn(
                styles.templateAreaRightRailModule,
                styles.templateAreaRightRailModulePadded,
               )}
            >
              {areas.infoEssential}
            </Template.Area>

            <Divider className={styles.templateAreaRightRailDivider} />
          </React.Fragment>
        }

        {areas.activitiesLodging &&
          <React.Fragment>
            <Template.Area
              key="activitiesLodging"
              className={cn(
                styles.templateAreaRightRailModule,
                styles.templateAreaActivities,
              )}
            >
              {areas.activitiesLodging}
            </Template.Area>

            <Divider className={styles.templateAreaRightRailDivider} />
          </React.Fragment>
        }

        {areas.adRail &&
          <Template.Area
            key="adRail"
            className={cn(
              styles.templateAreaRightRailModule,
              styles.templateAreaAd,
            )}
          >
            {areas.adRail}
          </Template.Area>
        }
      </aside>

      {areas.map &&
        <Template.Area
          key="map"
          className={styles.templateAreaMap}
        >
          {areas.map}
        </Template.Area>
      }

      {areas.reviewExtension &&
        <Template.Area
          key="reviewExtension"
          className={cn(
            styles.templateAreaLeftRailModule,
            styles.templateAreaArticle,
          )}
        >
          {areas.reviewExtension}
        </Template.Area>
      }

      {areas.descriptionPartner &&
        <Template.Area
          key="descriptionPartner"
          className={cn(
            styles.templateAreaLeftRailModule,
            styles.templateAreaDescription,
          )}
        >
          {areas.descriptionPartner}
        </Template.Area>
      }

      {areas.activityFeatures &&
        <React.Fragment>
          <Divider className={styles.templateAreaLeftRailModule} />

          <Template.Area
            key="activityFeatures"
            className={cn(
              styles.templateAreaLeftRailModule,
              styles.templateAreaArticle,
            )}
          >
            {areas.activityFeatures}
          </Template.Area>
        </React.Fragment>
      }

      {areas.tourItinerary &&
        <React.Fragment>
          <Divider className={styles.templateAreaLeftRailModule} />

          <Template.Area
            key="tourItinerary"
            className={cn(
              styles.templateAreaLeftRailModule,
              styles.templateAreaArticle,
            )}
          >
            {areas.tourItinerary}
          </Template.Area>
        </React.Fragment>
      }

      {areas.tour &&
        <React.Fragment>
          <Divider className={styles.templateAreaLeftRailModule} />

          <Template.Area
            key="tour"
            className={cn(
              styles.templateAreaLeftRailModule,
              styles.templateAreaRelatedTour,
            )}
          >
            {areas.tour}
          </Template.Area>
        </React.Fragment>
      }

      {areas.hotels &&
        <React.Fragment>
          <Divider className={styles.templateAreaLeftRailModule} />

          <Template.Area
            key="hotels"
            className={styles.templateAreaRelatedHotels}
          >
            {areas.hotels}
          </Template.Area>
        </React.Fragment>
      }
    </Template>
  );
};
