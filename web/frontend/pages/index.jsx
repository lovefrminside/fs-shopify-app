import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useTranslation, Trans } from "react-i18next";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";

import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function HomePage() {
  const { t } = useTranslation();
  console.log("before consuming api");
  const [products, setProducts] = useState([]);
  const client = axios.create({
    baseURL: 'https://teststoredec2231.myshopify.com/admin/products.json',
    headers: {'X-Shopify-Access-Token': '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'} 
  });
  //Fetch all products from shopify store while installing the App first time.
  useEffect(() => {
    const fetchAllProductsFromStore = async () => {
      try{
        let response = await client.get();
        setProducts(response.data);
      }catch(error){
        console.log("error", error);
      } 
    };
    fetchAllProductsFromStore();
  }, []);

  console.log("products==>", products);
  return (
    <Page fullWidth>
      {/*<TitleBar title={t("HomePage.title")} primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Text as="h2" variant="headingMd">
                    {t("HomePage.heading")}
                  </Text>
                  <p>
                    <Trans
                      i18nKey="HomePage.yourAppIsReadyToExplore"
                      components={{
                        PolarisLink: (
                          <Link url="https://polaris.shopify.com/" external />
                        ),
                        AdminApiLink: (
                          <Link
                            url="https://shopify.dev/api/admin-graphql"
                            external
                          />
                        ),
                        AppBridgeLink: (
                          <Link
                            url="https://shopify.dev/apps/tools/app-bridge"
                            external
                          />
                        ),
                      }}
                    />
                  </p>
                  <p>{t("HomePage.startPopulatingYourApp")}</p>
                  <p>
                    <Trans
                      i18nKey="HomePage.learnMore"
                      components={{
                        ShopifyTutorialLink: (
                          <Link
                            url="https://shopify.dev/apps/getting-started/add-functionality"
                            external
                          />
                        ),
                      }}
                    />
                  </p>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt={t("HomePage.trophyAltText")}
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <ProductsCard />
        </Layout.Section>
      </Layout>*/}
      <div>Dashboard Page</div>
    </Page>
  );
}
