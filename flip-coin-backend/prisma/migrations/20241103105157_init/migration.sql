BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Player] (
    [id] INT NOT NULL IDENTITY(1,1),
    [balance] FLOAT(53) NOT NULL CONSTRAINT [Player_balance_df] DEFAULT 10.0,
    CONSTRAINT [Player_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Prediction] (
    [id] INT NOT NULL IDENTITY(1,1),
    [outcome] NVARCHAR(1000) NOT NULL,
    [userGuess] NVARCHAR(1000) NOT NULL,
    [playerId] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Prediction_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Prediction_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Prediction] ADD CONSTRAINT [Prediction_playerId_fkey] FOREIGN KEY ([playerId]) REFERENCES [dbo].[Player]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
