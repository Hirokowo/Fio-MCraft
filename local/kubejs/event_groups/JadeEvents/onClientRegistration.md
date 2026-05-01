# JadeEvents.onClientRegistration

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: WailaClientRegistrationEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| block | ResourceLocation, Class<? extends Block> |  | BlockComponentProviderBuilder | ✘ |
| progress | ResourceLocation |  | ClientExtensionProviderBuilder<CompoundTag, ProgressView> | ✘ |
| registerCustomEnchantPower | Block, CustomEnchantPower |  | void | ✘ |
| itemStorage | ResourceLocation |  | ClientExtensionProviderBuilder<ItemStack, ItemView> | ✘ |
| fluidStorage | ResourceLocation |  | ClientExtensionProviderBuilder<CompoundTag, FluidView> | ✘ |
| registerEntityIcon | IEntityComponentProvider, Class<? extends Entity> |  | void | ✘ |
| addConfigListener | ResourceLocation, Consumer<ResourceLocation> |  | void | ✘ |
| registerBlockIcon | IBlockComponentProvider, Class<? extends Block> |  | void | ✘ |
| shouldHide | BlockState |  | boolean | ✘ |
| shouldHide | Entity |  | boolean | ✘ |
| shouldPick | BlockState |  | boolean | ✘ |
| shouldPick | Entity |  | boolean | ✘ |
| setServerData | CompoundTag |  | void | ✘ |
| hideTarget | EntityType<?> |  | void | ✘ |
| hideTarget | Block |  | void | ✘ |
| isServerConnected |  |  | boolean | ✘ |
| getServerData |  |  | CompoundTag | ✘ |
| getBlockCamouflage | LevelAccessor, BlockPos |  | ItemStack | ✘ |
| usePickedResult | EntityType<?> |  | void | ✘ |
| usePickedResult | Block |  | void | ✘ |
| entityAccessor |  |  | Builder | ✘ |
| blockAccessor |  |  | Builder | ✘ |
| maybeLowVisionUser |  |  | boolean | ✘ |
| getAccessorHandler | Class<? extends Accessor<?>> |  | Accessor.ClientHandler<Accessor<?>> | ✘ |
| isClientFeature | ResourceLocation |  | boolean | ✘ |
| entity | ResourceLocation, Class<? extends Entity> |  | EntityComponentProviderBuilder | ✘ |
| addConfig | ResourceLocation, boolean |  | void | ✘ |
| addConfig | ResourceLocation, float, float, float, boolean |  | void | ✘ |
| addConfig | ResourceLocation, int, int, int, boolean |  | void | ✘ |
| addConfig | ResourceLocation, String, Predicate<String> |  | void | ✘ |
| addConfig | ResourceLocation, Enum<?> |  | void | ✘ |
| markAsServerFeature | ResourceLocation |  | void | ✘ |
| markAsClientFeature | ResourceLocation |  | void | ✘ |
| registerEntityComponent | IEntityComponentProvider, Class<? extends Entity> |  | void | ✘ |
| addAfterRenderCallback | int, JadeAfterRenderCallback |  | void | ✘ |
| addAfterRenderCallback | JadeAfterRenderCallback |  | void | ✘ |
| addBeforeRenderCallback | int, JadeBeforeRenderCallback |  | void | ✘ |
| addBeforeRenderCallback | JadeBeforeRenderCallback |  | void | ✘ |
| addItemModNameCallback | JadeItemModNameCallback |  | void | ✘ |
| addItemModNameCallback | int, JadeItemModNameCallback |  | void | ✘ |
| isShowDetailsPressed |  |  | boolean | ✘ |
| addRayTraceCallback | int, JadeRayTraceCallback |  | void | ✘ |
| addRayTraceCallback | JadeRayTraceCallback |  | void | ✘ |
| addTooltipCollectedCallback | int, JadeTooltipCollectedCallback |  | void | ✘ |
| addTooltipCollectedCallback | JadeTooltipCollectedCallback |  | void | ✘ |
| registerItemStorageClient | IClientExtensionProvider<ItemStack, ItemView> |  | void | ✘ |
| registerFluidStorageClient | IClientExtensionProvider<CompoundTag, FluidView> |  | void | ✘ |
| registerBlockComponent | IBlockComponentProvider, Class<? extends Block> |  | void | ✘ |
| createPluginConfigScreen | Screen, String |  | Screen | ✘ |
| registerEnergyStorageClient | IClientExtensionProvider<CompoundTag, EnergyView> |  | void | ✘ |
| addRenderBackgroundCallback | JadeRenderBackgroundCallback |  | void | ✘ |
| addRenderBackgroundCallback | int, JadeRenderBackgroundCallback |  | void | ✘ |
| registerProgressClient | IClientExtensionProvider<CompoundTag, ProgressView> |  | void | ✘ |
| registerAccessorHandler | Class<T extends Accessor<?>>, Accessor.ClientHandler<T extends Accessor<?>> |  | void | ✘ |
| energyStorage | ResourceLocation |  | ClientExtensionProviderBuilder<CompoundTag, EnergyView> | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
JadeEvents.onClientRegistration((event) => {
	// This space (un)intentionally left blank
});
```

