"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";
import { BiFoodMenu } from "react-icons/bi";
import Link from "next/link";


export function Navigation() {
  return (
    <NavigationMenu >
        <NavigationMenuList >
          <NavigationMenuItem>
            <NavigationMenuTrigger>Meal Prep</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-2">
                  <NavigationMenuLink asChild className="w-80">
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/recipes"
                    >
                      <BiFoodMenu className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Recipes
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Browse our collection of recipes.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/meal-prep" title="Meal Prep basics">
                  Get started with Meal Prep.
                </ListItem>
                <ListItem href="/meal-prep" title="Introduction">
                  Get to know the basics.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Health</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/health" title="Health Trackers">
                  Track your health and fitness.
                </ListItem>
                <ListItem href="/health/calories" title="BMR">
                  Learn about Basal Metabolic Rate and how to calculate it.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Workouts
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>

    </NavigationMenu>

   
 
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
